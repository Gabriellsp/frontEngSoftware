import { NgModule } from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ListApartamentoComponent } from './list-apartamento/list-apartamento.component';

const MODULES = [
  MatFormFieldModule,
  MatRadioModule,
  FormsModule, 
  ReactiveFormsModule,
  MatInputModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class PagesMaterialModule {}
