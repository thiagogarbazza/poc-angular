import { Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { AbstractInputField } from '../abstract-input-field';

@Component({
  selector: 'input-text-editor',
  templateUrl: './input-text-editor.component.html',
  styleUrls: ['./input-text-editor.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputTextEditorComponent),
    multi: true
  }]
})
export class InputTextEditorComponent extends AbstractInputField {

  @Input() placeholder: string = '';
  @ViewChild('input') input: ElementRef;
}
