import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { ExampleOutputsTemplateComponent } from './example-output/example-outputs-template/example-outputs-template.component';
import { ExampleOutputTextComponent } from './example-output/example-output-text/example-output-text.component';

const routes: Routes = [
  {
    path: 'examples/tabs',
    component: ExampleTabsComponent,
    pathMatch: 'full'
  },
  {
    path: 'examples/inputs',
    component: ExampleInputsTemplateComponent,
    children: [
      { path: 'checkbox', component: ExampleInputCheckboxComponent, data: {activeTab: 'checkbox'}, pathMatch: 'full' },
      { path: 'code-editor', component: ExampleInputCodeEditorComponent, data: {activeTab: 'code-editor'}, pathMatch: 'full' },
      { path: 'date', component: ExampleInputDateComponent, data: {activeTab: 'date'}, pathMatch: 'full' },
      { path: 'email', component: ExampleInputEmailComponent, data: {activeTab: 'email'}, pathMatch: 'full' },
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
      { path: 'text', component: ExampleOutputTextComponent, data: {activeTab: 'text'}, pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
