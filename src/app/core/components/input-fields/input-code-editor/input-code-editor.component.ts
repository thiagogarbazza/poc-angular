import { Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { AbstractInputField } from '../abstract-input-field';

@Component({
  selector: 'input-code-editor',
  templateUrl: './input-code-editor.component.html',
  styleUrls: ['./input-code-editor.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputCodeEditorComponent),
    multi: true
  }]
})
export class InputCodeEditorComponent extends AbstractInputField {

  @Input() options: any = { theme: 'vs', language: 'javascript', tabSize: 2, minimap: {enabled: false} };
  @ViewChild('input') input: ElementRef;
}
