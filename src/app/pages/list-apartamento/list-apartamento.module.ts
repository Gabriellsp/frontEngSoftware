import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiMaterialModule } from '../../ui/ui-material.module';
import { PagesMaterialModule } from '../pages-material.module';

import { ListApartamentoRoutingModule } from './list-apartamento-routing.module';
import { ListApartamentoComponent } from './list-apartamento.component';
import { HttpClientModule }  from '@angular/common/http';

@NgModule({
  declarations: [ListApartamentoComponent],
  imports: [CommonModule, PagesMaterialModule, UiMaterialModule, ListApartamentoRoutingModule, HttpClientModule],
})
export class ListApartamentoModule {}
