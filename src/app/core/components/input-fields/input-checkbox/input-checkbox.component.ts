import { Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { AbstractInputField } from '@app-core/components/input-fields/abstract-input-field';
import { SelectableItem } from '@app/core/models/selectable-item';

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

  @Input() items: SelectableItem<string>[];
  @Input() reverse: boolean = false;
  @Input() inline: boolean = true;
  @ViewChild('input') input: ElementRef;
}
