export class FormComponent{
	private name: string;
	private ngTemplate: string;
	private ngComponent: string;


	public get $name(): string {
		return this.name;
	}

	public set $name(value: string) {
		this.name = value;
	}

	public get $ngTemplate(): string {
		return this.ngTemplate;
	}

	public set $ngTemplate(value: string) {
		this.ngTemplate = value;
	}

	public get $ngComponent(): string {
		return this.ngComponent;
	}

	public set $ngComponent(value: string) {
		this.ngComponent = value;
	}
	
}