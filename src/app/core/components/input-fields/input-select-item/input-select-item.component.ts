import { Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { AbstractInputField } from '@app-core/components/input-fields/abstract-input-field';
import { SelectableItem } from '@app/core/models/selectable-item';

@Component({
  selector: 'input-select-item',
  templateUrl: './input-select-item.component.html',
  styleUrls: ['./input-select-item.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputSelectItemComponent),
    multi: true
  }]
})
export class InputSelectItemComponent extends AbstractInputField {

  @Input() items: SelectableItem<any>[];
  @Input() multiple: boolean;
  @Input() placeholder: string = '';
  @ViewChild('input') input: ElementRef;

  public trackByFn(item: SelectableItem<any>) {
    return item.id;
  }
}
