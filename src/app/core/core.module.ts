import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { InputTextComponent } from './form/input-fields/input-text/input-text.component';
import { InputTextAreaComponent } from './form/input-fields/input-text-area/input-text-area.component';
import { InvalidFeedbackComponent } from './form/invalid-feedback/invalid-feedback.component';
import { InputNumberComponent } from './form/input-fields/input-number/input-number.component';
import { InputSwitchComponent } from './form/input-fields/input-switch/input-switch.component';
import { InputUrlComponent } from './form/input-fields/input-url/input-url.component';
import { InputEmailComponent } from './form/input-fields/input-email/input-email.component';
import { InputPasswordComponent } from './form/input-fields/input-password/input-password.component';

const COMPONENTS = [
  InputEmailComponent,
  InputNumberComponent,
  InputPasswordComponent,
  InputSwitchComponent,
  InputTextComponent,
  InputTextAreaComponent,
  InputUrlComponent,
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
    ReactiveFormsModule,
    FontAwesomeModule,
    //...MODULES
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    //...MODULES
    ...COMPONENTS
  ]
})
export class CoreModule {

  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIconPacks(fas, far);
  }
}
