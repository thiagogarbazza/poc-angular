import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExampleTabsComponent } from '@app-interface/examples/example-tabs/example-tabs.component';
import { ExampleInputsTemplateComponent } from '@app-interface/examples/example-inputs/example-inputs-template/example-inputs-template.component';
import { ExampleInputFileComponent } from '@app-interface/examples/example-inputs/example-input-file/example-input-file.component';
import { ExampleInputNumberComponent } from '@app-interface/examples/example-inputs/example-input-number/example-input-number.component';
import { ExampleInputTextAreaComponent } from '@app-interface/examples/example-inputs/example-input-text-area/example-input-text-area.component';
import { ExampleInputTextComponent } from '@app-interface/examples/example-inputs/example-input-text/example-input-text.component';
import { ExampleInputSwitchComponent } from '@app-interface/examples/example-inputs/example-input-switch/example-input-switch.component';
import { ExampleInputUrlComponent } from '@app-interface/examples/example-inputs/example-input-url/example-input-url.component';
import { ExampleInputEmailComponent } from '@app-interface/examples/example-inputs/example-input-email/example-input-email.component';
import { ExampleInputPasswordComponent } from '@app-interface/examples/example-inputs/example-input-password/example-input-password.component';
import { ExampleInputDateComponent } from '@app-interface/examples/example-inputs/example-input-date/example-input-date.component';
import { ExampleInputTextEditorComponent } from '@app-interface/examples/example-inputs/example-input-text-editor/example-input-text-editor.component';
import { ExampleInputCodeEditorComponent } from '@app-interface/examples/example-inputs/example-input-code-editor/example-input-code-editor.component';
import { ExampleInputSelectItemComponent } from '@app-interface/examples/example-inputs/example-input-select-item/example-input-select-item.component';
import { ExampleInputCheckboxComponent } from '@app-interface/examples/example-inputs/example-input-checkbox/example-input-checkbox.component';
import { ExampleInputRadioComponent } from '@app-interface/examples/example-inputs/example-input-radio/example-input-radio.component';
import { ExampleOutputsTemplateComponent } from '@app-interface/examples/example-outputs/example-outputs-template/example-outputs-template.component';
import { ExampleOutputTextComponent } from '@app-interface/examples/example-outputs/example-output-text/example-output-text.component';
import { ExampleOutputCodeComponent } from './example-outputs/example-output-code/example-output-code.component';
import { ExampleCRUDRoutingModule } from './example-crud/example-crud-routing.module';
import { ExampleDataGridComponent } from './example-data-grid/example-data-grid.component';

const routes: Routes = [
  { path: 'examples/data-grid', component: ExampleDataGridComponent, pathMatch: 'full' },
  { path: 'examples/tabs', component: ExampleTabsComponent, pathMatch: 'full' },
  {
    path: 'examples/inputs',
    component: ExampleInputsTemplateComponent,
    children: [
      { path: 'checkbox', component: ExampleInputCheckboxComponent, data: {activeTab: 'checkbox'}, pathMatch: 'full' },
      { path: 'code-editor', component: ExampleInputCodeEditorComponent, data: {activeTab: 'code-editor'}, pathMatch: 'full' },
      { path: 'date', component: ExampleInputDateComponent, data: {activeTab: 'date'}, pathMatch: 'full' },
      { path: 'email', component: ExampleInputEmailComponent, data: {activeTab: 'email'}, pathMatch: 'full' },
      { path: 'file', component: ExampleInputFileComponent, data: {activeTab: 'file'}, pathMatch: 'full' },
      { path: 'number', component: ExampleInputNumberComponent, data: {activeTab: 'number'}, pathMatch: 'full' },
      { path: 'password', component: ExampleInputPasswordComponent, data: {activeTab: 'password'}, pathMatch: 'full' },
      { path: 'radio', component: ExampleInputRadioComponent, data: {activeTab: 'radio'}, pathMatch: 'full' },
      { path: 'select-item', component: ExampleInputSelectItemComponent, data: {activeTab: 'select-item'}, pathMatch: 'full' },
      { path: 'switch', component: ExampleInputSwitchComponent, data: {activeTab: 'switch'}, pathMatch: 'full' },
      { path: 'text', component: ExampleInputTextComponent, data: {activeTab: 'text'}, pathMatch: 'full' },
      { path: 'text-area', component: ExampleInputTextAreaComponent, data: {activeTab: 'text-area'}, pathMatch: 'full' },
      { path: 'text-editor', component: ExampleInputTextEditorComponent, data: {activeTab: 'text-editor'}, pathMatch: 'full' },
      { path: 'url', component: ExampleInputUrlComponent, data: {activeTab: 'url'}, pathMatch: 'full' },
    ]
  },
  {
    path: 'examples/outputs',
    component: ExampleOutputsTemplateComponent,
    children: [
      { path: 'code', component: ExampleOutputCodeComponent, data: {activeTab: 'code'}, pathMatch: 'full' },
      { path: 'text', component: ExampleOutputTextComponent, data: {activeTab: 'text'}, pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ExampleCRUDRoutingModule
  ],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
