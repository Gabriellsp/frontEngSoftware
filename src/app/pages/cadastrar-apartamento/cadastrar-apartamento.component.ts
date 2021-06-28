import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ApartamentoService } from '../../services/apartamento.service';
import { Apartamento } from '../../models/apartamento';

@Component({
  selector: 'app-cadastrar-apartamento',
  templateUrl: './cadastrar-apartamento.component.html',
  styleUrls: ['./cadastrar-apartamento.component.scss']
})
export class CadastrarApartamentoComponent implements OnInit {

  message = null; 
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private readonly http: HttpClient,
    private apartamentoService: ApartamentoService
    ) {
    
  }

  ngOnInit(): void {
    this.form =  this.fb.group({
      nome: [null, [
        Validators.required,
      ]],
      quarto: [null, [
        Validators.required,
      ]],
      suite: [null, [
        Validators.required,
      ]],
      garagem: [null, [
        Validators.required,
      ]],
      sala: [null, [
        Validators.required,
      ]],
      armarioEmbutido: [null, [
        Validators.required,
      ]],
      endereco: [null, [
        Validators.required,
      ]],
      metros: [null, [
        Validators.required,
      ]],
      idBairro: [null, [
        Validators.required,
      ]],
      andar: [null, [
        Validators.required,
      ]],
      condominio: [null, [
        Validators.required,
      ]],
      portaria24h: [null, [
        Validators.required,
      ]],
    });
  }

  cadastrar(){

    console.log(this.form.value);
    const casa = this.form.value;

    this.cadastrarApartamento(casa);
   
  }

  cadastrarApartamento(apt: Apartamento) {
      this.apartamentoService.saveCasa(apt).subscribe(  
        () => {  
          this.message = 'Registro salvo com sucesso';  
        }  
      );  
  
  }
}
