import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculateComponent } from './calculate.component';

const routes: Routes = [{ path: '', component: CalculateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculateRoutingModule {}
