import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterfaceRoutingModule } from './interface/interface-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [InterfaceRoutingModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
