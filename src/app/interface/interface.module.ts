import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ExamplesModule } from '@app-interface/examples/examples.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    ExamplesModule
  ]
})
export class InterfaceModule { }
