import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ExampleTabsComponent } from './example-tabs/example-tabs.component';

@NgModule({
  declarations: [
    ExampleTabsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class ExamplesModule { }
