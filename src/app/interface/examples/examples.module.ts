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

@NgModule({
  declarations: [
    ExampleInputsTemplateComponent,
    ExampleInputEmailComponent,
    ExampleInputNumberComponent,
    ExampleInputSwitchComponent,
    ExampleInputTextComponent,
    ExampleInputTextAreaComponent,
    ExampleInputUrlComponent,
    ExampleTabsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule
  ]
})
export class ExamplesModule { }
