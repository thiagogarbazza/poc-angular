import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExampleTabsComponent } from './example-tabs/example-tabs.component';
import { ExampleInputsTemplateComponent } from './example-inputs/example-inputs-template/example-inputs-template.component';
import { ExampleInputTextComponent } from './example-inputs/example-input-text/example-input-text.component';

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
      { path: 'text', component: ExampleInputTextComponent, data: {activeTab: 'text'} },
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
