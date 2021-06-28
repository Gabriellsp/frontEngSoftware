import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiMaterialModule } from '../../ui/ui-material.module';
import { PagesMaterialModule } from './../pages-material.module';

import { CadastrarApartamentoRoutingModule } from './cadastrar-apartamento-routing.module';
import { CadastrarApartamentoComponent } from './cadastrar-apartamento.component';
import { HttpClientModule }  from '@angular/common/http';

@NgModule({
  declarations: [CadastrarApartamentoComponent],
  imports: [CommonModule, PagesMaterialModule, UiMaterialModule, CadastrarApartamentoRoutingModule, HttpClientModule],
})
export class CadastrarApartamentoModule {}
