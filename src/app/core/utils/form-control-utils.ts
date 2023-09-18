import { AbstractControl } from "@angular/forms";

export class FormControlUtils {

  public static isRequired(control: AbstractControl): boolean {
    if(!control.validator) {
      return false;
    }
    const validators = control.validator({} as AbstractControl);
    return validators && validators['required'];
  }
}
