import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreModule } from 'src/app/core/core.module';
import { ExampleTabsComponent } from './example-tabs/example-tabs.component';
import { ExampleInputsTemplateComponent } from './example-inputs/example-inputs-template/example-inputs-template.component';
import { ExampleInputNumberComponent } from './example-inputs/example-input-number/example-input-number.component';
import { ExampleInputTextAreaComponent } from './example-inputs/example-input-text-area/example-input-text-area.component';
import { ExampleInputTextComponent } from './example-inputs/example-input-text/example-input-text.component';
import { ExampleInputSwitchComponent } from './example-inputs/example-input-switch/example-input-switch.component';
import { ExampleInputUrlComponent } from './example-inputs/example-input-url/example-input-url.component';
import { ExampleInputEmailComponent } from './example-inputs/example-input-email/example-input-email.component';
import { ExampleInputPasswordComponent } from './example-inputs/example-input-password/example-input-password.component';
import { ExampleInputDateComponent } from './example-inputs/example-input-date/example-input-date.component';
import { ExampleInputTextEditorComponent } from './example-inputs/example-input-text-editor/example-input-text-editor.component';
import { ExampleInputCodeEditorComponent } from './example-inputs/example-input-code-editor/example-input-code-editor.component';
import { ExampleInputSelectItemComponent } from './example-inputs/example-input-select-item/example-input-select-item.component';
import { ExampleInputCheckboxComponent } from './example-inputs/example-input-checkbox/example-input-checkbox.component';
import { ExampleInputRadioComponent } from './example-inputs/example-input-radio/example-input-radio.component';
import { ExampleOutputTextComponent } from './example-outputs/example-output-text/example-output-text.component';
import { ExampleOutputsTemplateComponent } from './example-outputs/example-outputs-template/example-outputs-template.component';
import { ExampleInputFileComponent } from './example-inputs/example-input-file/example-input-file.component';

@NgModule({
  declarations: [
    ExampleInputCheckboxComponent,
    ExampleInputCodeEditorComponent,
    ExampleInputDateComponent,
    ExampleInputEmailComponent,
    ExampleInputFileComponent,
    ExampleInputNumberComponent,
    ExampleInputPasswordComponent,
    ExampleInputRadioComponent,
    ExampleInputSelectItemComponent,
    ExampleInputSwitchComponent,
    ExampleInputTextComponent,
    ExampleInputTextAreaComponent,
    ExampleInputTextEditorComponent,
    ExampleInputUrlComponent,
    ExampleInputsTemplateComponent,
    ExampleTabsComponent,
    ExampleOutputTextComponent,
    ExampleOutputsTemplateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule
  ]
})
export class ExamplesModule { }
