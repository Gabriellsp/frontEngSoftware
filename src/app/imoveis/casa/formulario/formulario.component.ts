import { Component, OnInit } from '@angular/core';
import { Casa } from '../shared/casa';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario-casa',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponentCasa implements OnInit {
  formCasa: FormGroup;

  constructor() { 
    this.formCasa = new FormGroup({
      qtQuartos: new FormControl(0),
      qtSuites:  new FormControl(0),
      qtSala:  new FormControl(0),
      numVagasGaragem: new FormControl(0),
      area: new FormControl(0),
      armarioEmbutido: new FormControl(0),
      descricao: new FormControl('')
    })
  }

  ngOnInit() {
    this.createForm(new Casa());
  }

  createForm(casa: Casa) {
    this.formCasa = new FormGroup({
      qtQuartos: new FormControl(casa.qtQuartos),
      qtSuites:  new FormControl(casa.qtSuites),
      qtSala:  new FormControl(casa.qtSala),
      numVagasGaragem: new FormControl(casa.numVagasGaragem),
      area: new FormControl(casa.area),
      armarioEmbutido: new FormControl(casa.armarioEmbutido),
      descricao: new FormControl(casa.descricao)
    })
  }

  onSubmit() {
    console.log(this.formCasa.value);
    this.createForm(new Casa());
  }

}
