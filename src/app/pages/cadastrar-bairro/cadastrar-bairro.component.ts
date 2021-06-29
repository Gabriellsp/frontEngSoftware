import { Component, OnInit } from '@angular/core';
import { BairroService } from '../../services/bairro.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Bairro } from '../../models/bairro';

@Component({
  selector: 'app-cadastrar-bairro',
  templateUrl: './cadastrar-bairro.component.html',
  styleUrls: ['./cadastrar-bairro.component.scss']
})
export class CadastrarBairroComponent implements OnInit {
  form: FormGroup;
  message = null;

  constructor(
    private fb: FormBuilder,
    private readonly http: HttpClient,
    private bairroService: BairroService) { }

  ngOnInit(): void {
    this.form =  this.fb.group({
      nome: [null, [
        Validators.required,
      ]],
    });
  }

  cadastrar(){

    console.log(this.form.value);
    const bairro = this.form.value; 
    this.cadastrarBairro(bairro);
  }

  cadastrarBairro(bairro: Bairro) {
    this.bairroService.saveBairro(bairro).subscribe(  
      () => {  
        this.message = 'Registro salvo com sucesso';
        alert("Cadastrado com sucesso!");
      }  
    );  
}

}
