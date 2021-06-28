import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarApartamentoComponent } from './cadastrar-apartamento.component';

const routes: Routes = [{ path: '', component: CadastrarApartamentoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarApartamentoRoutingModule {}