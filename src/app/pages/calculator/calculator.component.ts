import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormGroupDirective
} from "@angular/forms";


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  form: FormGroup;

  comprimentoDoRoleteCentral = 5;
  diametroEfetivoDoTambor = 15;
  rotacaoDoTambor = 10;

  constructor(private fb: FormBuilder){

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      CapacidadeDeProjeto: [null, [Validators.required]],
      VelocidadeRealCorreia: [null, [Validators.required]],
      LarguraDaCorreia: [null, [Validators.required]],
      PesoEspecifico: [null, [Validators.required]],
      AnguloBeta: [null, [Validators.required]],
      InclinacaoDosRoletesLateraisLambda: [null, [Validators.required]],
      RotacaoSincronaDoMotor: [null, [Validators.required]],
      DiametroTamborAcionamento: [null, [Validators.required]],
      EspessuraDoRevestimento: [null, [Validators.required]],
      EscorregamentoDoAcoplamentoDeAlfa: [null, [Validators.required]]
      });


  }

  calculaDiametroEfetivoDoTambor(){
    if(this.form.value.DiametroTamborAcionamento && this.form.value.EspessuraDoRevestimento){
      this.diametroEfetivoDoTambor = this.form.value.DiametroTamborAcionamento + (2*this.form.value.EspessuraDoRevestimento);
    }
  }

  calcular(){
    console.log(this.form.value);
  }

}
