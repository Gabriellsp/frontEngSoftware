import { Component, OnInit } from '@angular/core';
import { Apartamento } from '../shared/apartamento';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario-apartamento',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponentApartamento implements OnInit {
  formApartamento: FormGroup;

  constructor() { 
    this.formApartamento = new FormGroup({
      qtQuartos: new FormControl(0),
      qtSuites:  new FormControl(0),
      qtSala: new FormControl(0),
      qtSalaJantar: new FormControl(0),
      numVagasGaragem: new FormControl(0),
      area: new FormControl(0),
      armarioEmbutido: new FormControl(0),
      descricao: new FormControl(''),
      andar: new FormControl(0),
      valorCondomio: new FormControl(0),
      possuiCondomio24h: new FormControl(0)
    })
  }

  ngOnInit() {
    this.createForm(new Apartamento());
  }

  createForm(apartamento: Apartamento) {
    this.formApartamento = new FormGroup({
      qtQuartos: new FormControl(apartamento.qtQuartos),
      qtSuites:  new FormControl(apartamento.qtSuites),
      qtSala: new FormControl(apartamento.qtSala),
      qtSalaJantar: new FormControl(apartamento.qtSalaJantar),
      numVagasGaragem: new FormControl(apartamento.numVagasGaragem),
      area: new FormControl(apartamento.area),
      armarioEmbutido: new FormControl(apartamento.armarioEmbutido),
      descricao: new FormControl(apartamento.descricao),
      andar: new FormControl(apartamento.andar),
      valorCondomio: new FormControl(apartamento.valorCondomio),
      possuiCondomio24h: new FormControl(apartamento.possuiCondomio24h)
    })
  }

  onSubmitApt() {
    console.log(this.formApartamento.value);
    this.createForm(new Apartamento());
  }
}
