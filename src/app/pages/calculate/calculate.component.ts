import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.scss']
})
export class CalculateComponent implements OnInit {

  calculate: FormGroup;
  delta: number = 0;
  answer:string = "";
  x1: number = 0;
  x2: number = 0;
  neverUsed: boolean = true;
  loading: boolean = false;
  thereIsAnswer: boolean = false;

  constructor(fb: FormBuilder) {
    this.calculate =  fb.group({
      valueA: [null, [
        Validators.required,
      ]],
      valueB: [null, [
        Validators.required,
      ]],
      valueC: [null, [
        Validators.required,
      ]]
    });
  }

  ngOnInit(): void {
  }

  calculator(){

    this.neverUsed = false;
    this.thereIsAnswer = false;
    this.loading = true;

    this.delta = (this.calculate.value.valueB*this.calculate.value.valueB) - (4*(this.calculate.value.valueA*this.calculate.value.valueC))
    let squareRootDelta = Math.sqrt(this.delta);


    if(this.delta < 0){
      this.answer = "Está equação não possui raízes reais";
    }

    else if(this.delta = 0){
      this.x1 = (-this.calculate.value.valueB)/(2*this.calculate.value.valueA);
      this.answer = "A raiz dessa equação de 2º grau é: " + this.x1;
    }

    else{
      this.x1 = (-this.calculate.value.valueB + squareRootDelta)/(2*this.calculate.value.valueA);
      this.x2 = (-this.calculate.value.valueB - squareRootDelta)/(2*this.calculate.value.valueA);
      this.answer = "As raizes dessa equação de 2º grau são:" + '\n' + "x1 = " + this.x1 + '\n' + "e x2 = " + this.x2;
    }

    this.sleep(2000)
    .then(() => {
      this.thereIsAnswer = true;
      this.loading = false;
    })
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
