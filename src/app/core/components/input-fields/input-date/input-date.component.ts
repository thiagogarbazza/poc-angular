import { Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { AbstractInputField } from '../abstract-input-field';

@Component({
  selector: 'input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputDateComponent),
    multi: true
  }]
})
export class InputDateComponent extends AbstractInputField {

  @Input() placeholder: string = '';
  @ViewChild('input') input: ElementRef;

  public dateSelect() {
    this.input.nativeElement.focus();
  }
}
