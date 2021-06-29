import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ApartamentoService } from '../../services/apartamento.service';
import { BairroService } from '../../services/bairro.service';
import { Apartamento } from '../../models/apartamento';

@Component({
  selector: 'app-cadastrar-apartamento',
  templateUrl: './cadastrar-apartamento.component.html',
  styleUrls: ['./cadastrar-apartamento.component.scss']
})
export class CadastrarApartamentoComponent implements OnInit {

  message = null; 
  form: FormGroup;
  bairros;
  
  constructor(
    private fb: FormBuilder,
    private readonly http: HttpClient,
    private apartamentoService: ApartamentoService,
    private bairroService: BairroService
    ) {
    
  }

  ngOnInit(): void {
    this.listBairros();
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
      aluguel: [null, [
        Validators.required,
      ]],
      portaria24h: [0, [
        Validators.required,
      ]],
      descricao: [null, [
        Validators.required,
      ]],
    });
  }

  listBairros() {
    this.bairroService.getListBairro().subscribe(  
      (data) => {  
        this.bairros = data;
        this.message = 'Lista de casas retornadas com sucesso!';  
      }  
    );  
  }

  cadastrar(){

    console.log(this.form.value);
    const apt = this.form.value;

    this.cadastrarApartamento(apt);
   
  }

  cadastrarApartamento(apt: Apartamento) {
      this.apartamentoService.saveCasa(apt).subscribe(  
        () => {  
          this.message = 'Registro salvo com sucesso';  
          alert("Cadastrado com sucesso!");
        }  
      );  
  
  }
}
