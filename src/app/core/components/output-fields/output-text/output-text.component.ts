import { Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'output-text',
  templateUrl: './output-text.component.html',
  styleUrls: ['./output-text.component.scss']
})
export class OutputTextComponent {

  @Input() label: string;

}
