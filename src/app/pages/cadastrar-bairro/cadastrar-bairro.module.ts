import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiMaterialModule } from '../../ui/ui-material.module';
import { PagesMaterialModule } from '../pages-material.module';

import { CadastrarBairroRoutingModule } from './cadastrar-bairro-routing.module';
import { CadastrarBairroComponent } from './cadastrar-bairro.component';
import { HttpClientModule }  from '@angular/common/http';

@NgModule({
  declarations: [CadastrarBairroComponent],
  imports: [CommonModule, PagesMaterialModule, UiMaterialModule, CadastrarBairroRoutingModule, HttpClientModule],
})
export class CadastrarBairroModule {}
