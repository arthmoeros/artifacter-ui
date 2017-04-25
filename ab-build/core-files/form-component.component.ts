import generator from './../../abgenerators/<!--meta.generatorComponent-->';
import { Component } from '@angular/core';

@Component({
	selector: '<!--(cC2dashed)form.formId-->',
	templateUrl: './<!--(cC2dashed)form.formId-->.component.html',
	styleUrls: ['/app.component.css']
})
export class <!--form.className-->Stub {

	private map: {
		::INPUTS::
		<!--input.mapValueKey-->?: string,
		::/INPUTS::
	};
	
	constructor (){
		this.map = {
			::DEFAULT_VALUES::
			<!--input.mapValueKey-->: "<!--input.commonDefaultValue-->",
			::/DEFAULT_VALUES::
		};
	}

	public <!--form.formFunction-->() {
		generator.<!--form.formFunction-->(this.map);
	};


}