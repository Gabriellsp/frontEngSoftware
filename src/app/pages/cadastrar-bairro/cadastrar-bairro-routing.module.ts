import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarBairroComponent } from './cadastrar-bairro.component';

const routes: Routes = [{ path: '', component: CadastrarBairroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarBairroRoutingModule {}