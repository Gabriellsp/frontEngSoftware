import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiMaterialModule } from '../../ui/ui-material.module';
import { PagesMaterialModule } from './../pages-material.module';

import { CadastrarCasaRoutingModule } from './cadastrar-casa-routing.module';
import { CadastrarCasaComponent } from './cadastrar-casa.component';
import { HttpClientModule }  from '@angular/common/http';

@NgModule({
  declarations: [CadastrarCasaComponent],
  imports: [CommonModule, PagesMaterialModule, UiMaterialModule, CadastrarCasaRoutingModule, HttpClientModule],
})
export class CadastrarCasaModule {}
