import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreModule } from '@app/core/core.module';

import { ExampleCRUDAPIService } from './services/example-crud-api.service';
import { ExampleCRUDCreateComponent } from './views/example-crud-create/example-crud-create.component';
import { ExampleCRUDDetailComponent } from './views/example-crud-detail/example-crud-detail.component';
import { ExampleCRUDSearchComponent } from '@app/interface/examples/example-crud/views/example-crud-search/example-crud-search.component';
import { ExampleCRUDUpdateComponent } from './views/example-crud-update/example-crud-update.component';


@NgModule({
  declarations: [
    ExampleCRUDCreateComponent,
    ExampleCRUDDetailComponent,
    ExampleCRUDSearchComponent,
    ExampleCRUDUpdateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule
  ],
  providers: [
    ExampleCRUDAPIService
  ]
})
export class ExampleCRUDModule { }
