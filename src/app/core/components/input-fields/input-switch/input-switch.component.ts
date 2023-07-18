import { Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { AbstractInputField } from '../abstract-input-field';

@Component({
  selector: 'input-switch',
  templateUrl: './input-switch.component.html',
  styleUrls: ['./input-switch.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputSwitchComponent),
    multi: true
  }]
})
export class InputSwitchComponent extends AbstractInputField {

  @ViewChild('input') input: ElementRef;
  @Input() labelOn: string;
  @Input() labelOff: string;
  @Input() reverse: boolean = false;
}
