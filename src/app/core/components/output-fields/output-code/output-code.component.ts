import { Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'output-code',
  templateUrl: './output-code.component.html',
  styleUrls: ['./output-code.component.scss']
})
export class OutputCodeComponent {

  @Input() label: string;

}
