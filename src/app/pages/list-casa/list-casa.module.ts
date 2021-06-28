import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiMaterialModule } from '../../ui/ui-material.module';
import { PagesMaterialModule } from './../pages-material.module';

import { ListCasaRoutingModule } from './list-casa-routing.module';
import { ListCasaComponent } from './list-casa.component';
import { HttpClientModule }  from '@angular/common/http';

@NgModule({
  declarations: [ListCasaComponent],
  imports: [CommonModule, PagesMaterialModule, UiMaterialModule, ListCasaRoutingModule, HttpClientModule],
})
export class ListCasaModule {}
