import { Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { AbstractInputField } from '../abstract-input-field';
import { QuillEditorComponent } from 'ngx-quill';

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

  @Input() modules: any = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      ['blockquote', 'code-block'],
      ['clean']
    ]
  };
  @Input() placeholder: string = '';
  @ViewChild('input') input: QuillEditorComponent;
}
