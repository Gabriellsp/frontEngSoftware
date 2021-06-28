import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCasaComponent } from './list-casa.component';

const routes: Routes = [{ path: '', component: ListCasaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCasaRoutingModule {}
