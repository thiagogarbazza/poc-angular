import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExampleTabsComponent } from './example-tabs/example-tabs.component';
import { ExampleInputsTemplateComponent } from './example-inputs/example-inputs-template/example-inputs-template.component';
import { ExampleInputNumberComponent } from './example-inputs/example-input-number/example-input-number.component';
import { ExampleInputTextAreaComponent } from './example-inputs/example-input-text-area/example-input-text-area.component';
import { ExampleInputTextComponent } from './example-inputs/example-input-text/example-input-text.component';
import { ExampleInputSwitchComponent } from './example-inputs/example-input-switch/example-input-switch.component';

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
      { path: 'number', component: ExampleInputNumberComponent, data: {activeTab: 'number'}, pathMatch: 'full' },
      { path: 'switch', component: ExampleInputSwitchComponent, data: {activeTab: 'switch'}, pathMatch: 'full' },
      { path: 'text', component: ExampleInputTextComponent, data: {activeTab: 'text'}, pathMatch: 'full' },
      { path: 'text-area', component: ExampleInputTextAreaComponent, data: {activeTab: 'text-area'}, pathMatch: 'full' },
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
