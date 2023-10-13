import { registerLocaleData } from '@angular/common';
import ptBR from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterfaceModule } from './interface/interface.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

// Necessário para que o pt-BR seja o locale default
registerLocaleData(ptBR, 'pt-BR');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InterfaceModule,
    NgbDropdownModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
