import { Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { AbstractInputField } from '@app-core/components/input-fields/abstract-input-field';
import { FormControlUtils } from '@app/core/utils/form-control-utils';

@Component({
  selector: 'input-text-area',
  templateUrl: './input-text-area.component.html',
  styleUrls: ['./input-text-area.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputTextAreaComponent),
    multi: true
  }]
})
export class InputTextAreaComponent extends AbstractInputField {

  @Input() placeholder: string = '';
  @ViewChild('input') input: ElementRef;

  public maxLength: number;

  override ngOnInit() {
    super.ngOnInit();
    this.maxLength = FormControlUtils.maxLength(this.control);
  }
}
