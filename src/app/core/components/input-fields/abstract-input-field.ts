import { Directive, Input, OnInit } from "@angular/core";
import { AbstractControl, ControlContainer, ControlValueAccessor } from "@angular/forms";

@Directive()
export abstract class AbstractInputField implements ControlValueAccessor, OnInit {

  @Input() formControlName: string;
  @Input() label: string;
  @Input() readonly: boolean = false;
  public formGroup: any;
  public control: any;
  public isRequired: boolean;

  constructor(public controlContainer: ControlContainer) {}

  onChanged: any = () => { };
  onTouched: any = () => { };

  public isInvalid(): boolean {
    return this.control && this.control.invalid && (this.control.touched || this.control.dirty);
  }

  public isValid(): boolean {
    return this.control && this.control.valid && (this.control.touched || this.control.dirty);
  }

  ngOnInit() {
    this.formGroup = this.controlContainer.control;
    this.control = this.formGroup.get(this.formControlName);
    this.isRequired = this.checkRequired(this.control);
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onBlur() {
    this.onTouched();
    this.onChanged(this.control.value);
  }

  writeValue(newValue: any): void {
    if(newValue != this.control.value) {
      this.control.value = newValue;
    }
  }

  private checkRequired(control: AbstractControl): boolean {
    if(!control.validator) {
      return false;
    }
    const validators = control.validator({} as AbstractControl);
    return validators && validators['required'];
  }
}
