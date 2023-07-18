import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { NgbDateAdapter, NgbDateParserFormatter, NgbDatepickerConfig, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectConfig, NgSelectModule } from '@ng-select/ng-select';
import { QuillModule } from 'ngx-quill'

import { InputTextComponent } from './components/input-fields/input-text/input-text.component';
import { InputTextAreaComponent } from './components/input-fields/input-text-area/input-text-area.component';
import { InvalidFeedbackComponent } from './components/invalid-feedback/invalid-feedback.component';
import { InputNumberComponent } from './components/input-fields/input-number/input-number.component';
import { InputSwitchComponent } from './components/input-fields/input-switch/input-switch.component';
import { InputUrlComponent } from './components/input-fields/input-url/input-url.component';
import { InputEmailComponent } from './components/input-fields/input-email/input-email.component';
import { InputPasswordComponent } from './components/input-fields/input-password/input-password.component';
import { InputDateComponent } from './components/input-fields/input-date/input-date.component';
import { CustomAdapter, CustomDateParserFormatter } from './components/input-fields/input-date/input-date.formatters';
import { InputTextEditorComponent } from './components/input-fields/input-text-editor/input-text-editor.component';
import { InputCodeEditorComponent } from './components/input-fields/input-code-editor/input-code-editor.component';
import { InputSelectItemComponent } from './components/input-fields/input-select-item/input-select-item.component';
import { InputCheckboxComponent } from './components/input-fields/input-checkbox/input-checkbox.component';
import { InputRadioComponent } from './components/input-fields/input-radio/input-radio.component';
import { OutputTextComponent } from './components/output-fields/output-text/output-text.component';
import { InputFileComponent } from './components/input-fields/input-file/input-file.component';


const COMPONENTS = [
  InputCheckboxComponent,
  InputCodeEditorComponent,
  InputDateComponent,
  InputEmailComponent,
  InputFileComponent,
  InputNumberComponent,
  InputPasswordComponent,
  InputRadioComponent,
  InputSelectItemComponent,
  InputSwitchComponent,
  InputTextComponent,
  InputTextAreaComponent,
  InputTextEditorComponent,
  InputUrlComponent,
  InvalidFeedbackComponent,
  OutputTextComponent,
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
    NgbDatepickerModule,
    NgSelectModule,
    MonacoEditorModule.forRoot(), // use forRoot() in main app module only.
    QuillModule.forRoot(),
    //...MODULES
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MonacoEditorModule,
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
    private ngbDatepickerConfig: NgbDatepickerConfig,
    private ngSelectConfig: NgSelectConfig) {
    faIconLibrary.addIconPacks(fas, far);
    CoreModule.ngbDatepickerSetUp(ngbDatepickerConfig);
    CoreModule.ngSelectSetUp(ngSelectConfig);
  }

  private static ngbDatepickerSetUp (config: NgbDatepickerConfig) {
    config.firstDayOfWeek = 7; // Iniciar no domingo.
    config.navigation = 'select';
  }

  private static ngSelectSetUp (config: NgSelectConfig) {
    config.appendTo = 'body';
    config.placeholder = 'Selecionar...';
    config.notFoundText = 'Nenhum resultado encontrado'
  }
}
