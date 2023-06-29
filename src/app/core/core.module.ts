import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from './form/input-fields/input-text/input-text.component';
import { InvalidFeedbackComponent } from './form/invalid-feedback/invalid-feedback.component';

const COMPONENTS = [
  InputTextComponent,
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
