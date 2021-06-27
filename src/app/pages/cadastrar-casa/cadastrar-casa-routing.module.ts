import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarCasaComponent } from './cadastrar-casa.component';

const routes: Routes = [{ path: '', component: CadastrarCasaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarCasaRoutingModule {}
