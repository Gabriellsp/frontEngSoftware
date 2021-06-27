import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiMaterialModule } from '../../ui/ui-material.module';
import { PagesMaterialModule } from './../pages-material.module';

import { CalculateRoutingModule } from './calculate-routing.module';
import { CalculateComponent } from './calculate.component';

@NgModule({
  declarations: [CalculateComponent],
  imports: [CommonModule, PagesMaterialModule, UiMaterialModule, CalculateRoutingModule],
})
export class CalculateModule {}
