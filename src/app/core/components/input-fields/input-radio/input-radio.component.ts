import { Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { AbstractInputField } from '@app-core/components/input-fields/abstract-input-field';
import { SelectableItem } from '@app/core/models/selectable-item';

@Component({
  selector: 'input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputRadioComponent),
    multi: true
  }]
})
export class InputRadioComponent extends AbstractInputField {

  @Input() items: SelectableItem<string>[];
  @Input() reverse: boolean = false;
  @Input() inline: boolean = true;
  @ViewChild('input') input: ElementRef;
}
