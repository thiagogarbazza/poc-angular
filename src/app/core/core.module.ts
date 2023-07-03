import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { NgbDateAdapter, NgbDateParserFormatter, NgbDatepickerConfig, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { InputTextComponent } from './form/input-fields/input-text/input-text.component';
import { InputTextAreaComponent } from './form/input-fields/input-text-area/input-text-area.component';
import { InvalidFeedbackComponent } from './form/invalid-feedback/invalid-feedback.component';
import { InputNumberComponent } from './form/input-fields/input-number/input-number.component';
import { InputSwitchComponent } from './form/input-fields/input-switch/input-switch.component';
import { InputUrlComponent } from './form/input-fields/input-url/input-url.component';
import { InputEmailComponent } from './form/input-fields/input-email/input-email.component';
import { InputPasswordComponent } from './form/input-fields/input-password/input-password.component';
import { InputDateComponent } from './form/input-fields/input-date/input-date.component';
import { CustomAdapter, CustomDateParserFormatter } from './form/input-fields/input-date/input-date.formatters';
import { InputTextEditorComponent } from './form/input-fields/input-text-editor/input-text-editor.component';
import { InputCodeEditorComponent } from './form/input-fields/input-code-editor/input-code-editor.component';

const COMPONENTS = [
  InputCodeEditorComponent,
  InputDateComponent,
  InputEmailComponent,
  InputNumberComponent,
  InputPasswordComponent,
  InputSwitchComponent,
  InputTextComponent,
  InputTextAreaComponent,
  InputTextEditorComponent,
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
    NgbDatepickerModule
    //...MODULES
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    //...MODULES
    ...COMPONENTS
  ],
  providers: [
    {provide: NgbDateAdapter        , useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ]
})
export class CoreModule {

  constructor (
    private faIconLibrary: FaIconLibrary,
    private ngbDatepickerConfig: NgbDatepickerConfig) {
    faIconLibrary.addIconPacks(fas, far);
    CoreModule.ngbDatepickerSetUp(ngbDatepickerConfig);
  }

  private static ngbDatepickerSetUp (config: NgbDatepickerConfig) {
    config.firstDayOfWeek = 7; // Iniciar no domingo.
    config.navigation = 'select';
  }
}
