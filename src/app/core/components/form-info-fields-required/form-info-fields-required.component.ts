import { Component, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer } from '@angular/forms';
import { FormControlUtils } from '@app/core/utils/form-control-utils';

@Component({
  selector: 'form-info-fields-required',
  templateUrl: './form-info-fields-required.component.html',
  styleUrls: ['./form-info-fields-required.component.scss']
})
export class FormInfoFieldsRequiredComponent implements OnInit {

  public show = false;

  constructor(public controlContainer: ControlContainer) {}

  ngOnInit() {
    const formGroup : any = this.controlContainer.control;

    if(!formGroup) {
      return;
    }

    const controls : AbstractControl[] = Object.values(formGroup.controls);
    this.show = controls.some(control => FormControlUtils.isRequired(control))
  }
}
