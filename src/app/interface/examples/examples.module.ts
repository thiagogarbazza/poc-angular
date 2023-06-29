import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ExampleTabsComponent } from './example-tabs/example-tabs.component';
import { ExampleInputsTemplateComponent } from './example-inputs/example-inputs-template/example-inputs-template.component';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExampleInputTextComponent } from './example-inputs/example-input-text/example-input-text.component';

@NgModule({
  declarations: [
    ExampleInputsTemplateComponent,
    ExampleInputTextComponent,
    ExampleTabsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule
  ]
})
export class ExamplesModule { }
