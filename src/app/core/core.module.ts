import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputTextComponent } from './form/input-fields/input-text/input-text.component';
import { InputTextAreaComponent } from './form/input-fields/input-text-area/input-text-area.component';
import { InvalidFeedbackComponent } from './form/invalid-feedback/invalid-feedback.component';
import { InputNumberComponent } from './form/input-fields/input-number/input-number.component';

const COMPONENTS = [
  InputNumberComponent,
  InputTextComponent,
  InputTextAreaComponent,
  InvalidFeedbackComponent,
];

const MODULES = [

];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    //...MODULES
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    //...MODULES
    ...COMPONENTS
  ]
})
export class CoreModule {


}
