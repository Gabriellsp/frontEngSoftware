import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListApartamentoComponent } from './list-apartamento.component';

const routes: Routes = [{ path: '', component: ListApartamentoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListApartamentoRoutingModule {}
