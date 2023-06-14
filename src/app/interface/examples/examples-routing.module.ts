import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExampleTabsComponent } from './example-tabs/example-tabs.component';

const routes: Routes = [
  {
    path: 'examples/tabs',
    component: ExampleTabsComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
