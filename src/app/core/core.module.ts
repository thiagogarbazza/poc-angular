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

import { InputCheckboxComponent } from '@app-core/components//input-fields/input-checkbox/input-checkbox.component';
import { InputCodeEditorComponent } from '@app-core/components//input-fields/input-code-editor/input-code-editor.component';
import { InputDateComponent } from '@app-core/components//input-fields/input-date/input-date.component';
import { CustomAdapter, CustomDateParserFormatter } from '@app-core/components//input-fields/input-date/input-date.formatters';
import { InputFileComponent } from '@app-core/components//input-fields/input-file/input-file.component';
import { InputEmailComponent } from '@app-core/components//input-fields/input-email/input-email.component';
import { InputNumberComponent } from '@app-core/components//input-fields/input-number/input-number.component';
import { InputPasswordComponent } from '@app-core/components//input-fields/input-password/input-password.component';
import { InputRadioComponent } from '@app-core/components//input-fields/input-radio/input-radio.component';
import { InputSelectItemComponent } from '@app-core/components//input-fields/input-select-item/input-select-item.component';
import { InputSwitchComponent } from '@app-core/components//input-fields/input-switch/input-switch.component';
import { InputTextComponent } from '@app-core/components//input-fields/input-text/input-text.component';
import { InputTextAreaComponent } from '@app-core/components//input-fields/input-text-area/input-text-area.component';
import { InputTextEditorComponent } from '@app-core/components//input-fields/input-text-editor/input-text-editor.component';
import { InputUrlComponent } from '@app-core/components//input-fields/input-url/input-url.component';
import { InvalidFeedbackComponent } from '@app-core/components//invalid-feedback/invalid-feedback.component';
import { OutputTextComponent } from '@app-core/components//output-fields/output-text/output-text.component';


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
