import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExamplesRoutingModule } from './examples/examples-routing.module';

const routes: Routes = [

];

@NgModule({
  imports: [
    ExamplesRoutingModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class InterfaceRoutingModule { }
