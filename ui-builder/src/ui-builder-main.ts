import * as fs from "fs";
import * as shelljs from "shelljs";

import { GenerationForm } from "./entity/generation-form";
import { GenerationFormRenderer } from "./renderer/generation-form.renderer";
import { GenerationFormWriter } from "./other/generation-form.writer";
import { NgCoreFilesRenderer } from "./renderer/ng-core-files.renderer";

import { generatedFolder, appSrcFolder, uiBuilderConfigFolder } from "./constants";

/**
 * @class UIBuilderMain
 * @author arthmoeros (Arturo Saavedra) artu.saavedra@gmail.com
 * 
 * This singleton class runs the UI generation process for Artifacter, it uses the json configuration files
 * found at ./ui-builder/config, there is a JSON Schema for config files, but as of today (2017-05-07) the standard
 * isn't up to the requirements of this application, so the Schema is only for reference purposes, there is no
 * validation process yet.
 * 
 */
class UIBuilderMain {

	private static readonly instance: UIBuilderMain = new UIBuilderMain();

	private constructor(){

	}

	public static getInstance(): UIBuilderMain{
		return UIBuilderMain.instance;
	}

	public main() {
		console.info("Starting AB-Build");
		shelljs.rm("-R", generatedFolder);
		console.info("Cleaned existing target folders");
		let formConfigFileNames: string[] = shelljs.ls(uiBuilderConfigFolder);
		console.info("Found the following files in the config folder (I will only consider JSON files): "+formConfigFileNames);
		let generationForms: GenerationForm[] = new Array<GenerationForm>();
		formConfigFileNames.forEach(formConfigFileName => {
			if (formConfigFileName.indexOf(".json") != -1) {
				console.info("Processing file "+formConfigFileName);
				generationForms.push(this.processConfiguration(formConfigFileName));
			}
		});
		new GenerationFormWriter().write(generationForms);
		console.info("Generation Forms files written");

		let coreFiles: Map<string,string> = new NgCoreFilesRenderer().render(generationForms);
		console.info("NG core files rendered");
		
		coreFiles.forEach((value, key) => {
			fs.writeFileSync(key, value)
		});
		console.info("NG core files written");
		console.info("donzo!");
	}

	private processConfiguration(jsonConfigFileName: string): GenerationForm {
		let jsonOutput: any = JSON.parse(fs.readFileSync(uiBuilderConfigFolder+"/"+jsonConfigFileName).toString());
		console.info("> JSON unmarshalled into FormsConfig");
		let genForm: GenerationForm = new GenerationFormRenderer().render(jsonOutput.uiConfig);
		console.info("> Generation Form files rendered");
		return genForm;
	}

}

UIBuilderMain.getInstance().main();