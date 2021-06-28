import { NgModule } from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const MODULES = [
  MatFormFieldModule,
  FormsModule, 
  ReactiveFormsModule,
  MatInputModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class PagesMaterialModule {}
