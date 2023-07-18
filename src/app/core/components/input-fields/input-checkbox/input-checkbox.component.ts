import { Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { AbstractInputField } from '../abstract-input-field';
import SelectableItem from 'src/app/core/service/selectable-item';

@Component({
  selector: 'input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputCheckboxComponent),
    multi: true
  }]
})
export class InputCheckboxComponent extends AbstractInputField {

  @Input() items: Array<SelectableItem<string>>;
  @Input() reverse: boolean = false;
  @Input() inline: boolean = true;
  @ViewChild('input') input: ElementRef;
}
