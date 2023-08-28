import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExampleCRUDDetailComponent } from './views/example-crud-detail/example-crud-detail.component';
import { ExampleCRUDDetailResolver } from './views/example-crud-detail/example-crud-detail.resolver';

import { ExampleCRUDSearchComponent } from './views/example-crud-search/example-crud-search.component';
import { ExampleCRUDSearchResolver } from './views/example-crud-search/example-crud-search.resolver';

import { ExampleCRUDUpdateComponent } from './views/example-crud-update/example-crud-update.component';
import { ExampleCRUDUpdateResolver } from './views/example-crud-update/example-crud-update.resolver';
import { ExampleCRUDCreateComponent } from './views/example-crud-create/example-crud-create.component';
import { ExampleCRUDCreateResolver } from './views/example-crud-create/example-crud-create.resolver';

const routes: Routes = [
  { path: 'examples/crud', component: ExampleCRUDSearchComponent, resolve: {item: ExampleCRUDSearchResolver}, pathMatch: 'full' },
  { path: 'examples/crud/create', component: ExampleCRUDCreateComponent, resolve: {item: ExampleCRUDCreateResolver}, pathMatch: 'full' },
  { path: 'examples/crud/:id', component: ExampleCRUDDetailComponent, resolve: {item: ExampleCRUDDetailResolver}, pathMatch: 'full' },
  { path: 'examples/crud/:id/update', component: ExampleCRUDUpdateComponent, resolve: {item: ExampleCRUDUpdateResolver}, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
    ExampleCRUDCreateResolver,
    ExampleCRUDDetailResolver,
    ExampleCRUDSearchResolver,
    ExampleCRUDUpdateResolver
  ]
})
export class ExampleCRUDRoutingModule { }
