import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponentCasa } from './imoveis/casa/formulario/formulario.component';
import { FormularioComponentApartamento } from './imoveis/apartamento/formulario/formulario.component';
@NgModule({
  declarations: [
    AppComponent,
    FormularioComponentCasa,
    FormularioComponentApartamento
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
