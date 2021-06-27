import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiMaterialModule } from '../../ui/ui-material.module';
import { PagesMaterialModule } from './../pages-material.module';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorComponent } from './calculator.component';

@NgModule({
  declarations: [CalculatorComponent],
  imports: [CommonModule, PagesMaterialModule, UiMaterialModule, CalculatorRoutingModule],
})
export class CalculatorModule {}
