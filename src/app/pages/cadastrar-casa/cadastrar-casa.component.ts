import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable} from 'rxjs';
import { CasaService } from '../../services/casa.service';
import { Casa } from '../../models/casa';
import { BairroService } from '../../services/bairro.service';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-cadastrar-casa',
  templateUrl: './cadastrar-casa.component.html',
  styleUrls: ['./cadastrar-casa.component.scss']
})
export class CadastrarCasaComponent implements OnInit {

  message = null; 
  form: FormGroup;
  bairros;
  
  constructor(
    private fb: FormBuilder,
    private readonly http: HttpClient,
    private casaService: CasaService,
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
      aluguel: [null, [
        Validators.required,
      ]],
      descricao: [null, [
        Validators.required,
      ]],
    });
  }

  cadastrar(){

    console.log(this.form.value);
    const casa = this.form.value;

    this.cadastrarCasa(casa);
   
  }

  cadastrarCasa(casa: Casa) {
      this.casaService.saveCasa(casa).subscribe(  
        () => {  
          this.message = 'Registro salvo com sucesso';
          alert("Cadastrado com sucesso!");  
        }  
      );  
  
  }

  listBairros() {
    this.bairroService.getListBairro().subscribe(  
      (data) => {  
        this.bairros = data;
        this.message = 'Lista de casas retornadas com sucesso!';  
      }  
    );  
  }

}
