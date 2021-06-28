import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable} from 'rxjs';
import { CasaService } from '../../services/casa.service';
import { Casa } from '../../models/casa';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-cadastrar-casa',
  templateUrl: './cadastrar-casa.component.html',
  styleUrls: ['./cadastrar-casa.component.scss']
})
export class CadastrarCasaComponent implements OnInit {
  dataSaved = false;  
  alunoForm: any;  
  allAlunos: Observable<Casa[]>;  
  alunoIdUpdate = null;  
  message = null; 
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private readonly http: HttpClient,
    private casaService: CasaService
    ) {
    
  }

  ngOnInit(): void {
    this.form =  this.fb.group({
      nome: ['oi', [
        Validators.required,
      ]],
      quarto: [1, [
        Validators.required,
      ]],
      suite: [1, [
        Validators.required,
      ]],
      garagem: [1, [
        Validators.required,
      ]],
      sala: [1, [
        Validators.required,
      ]],
      armarioEmbutido: [1, [
        Validators.required,
      ]],
      endereco: ['1', [
        Validators.required,
      ]],
      metros: [1, [
        Validators.required,
      ]],
      idBairro: [1, [
        Validators.required,
      ]],
    });
  }

  cadastrar(){

    console.log(this.form.value);
    const casa = this.form.value;
    this.casaService.saveCasa(casa).subscribe(() => {
      
    });
   
  }

  cadastrarCasa(casa: Casa) {
    if (casa.area == null) {  
      this.casaService.saveCasa(casa).subscribe(  
        () => {  
          this.dataSaved = true;  
          this.message = 'Registro salvo com sucesso';  
        }  
      );  
    }
  }
  


  //  post<T>(data: any): Observable<T> {
  //   const httpOptions = {
  //     headers: new HttpHeaders("Content-Type: application/json")
  //   };
  //   const url = 'http://localhost:3000/casa/create/';
  //   return this.http.post<T>(url, data, httpOptions)
  //     .pipe(map((response: T) => {
  //       console.log('dentrooooooooo');
  //       return response;
  //     }))
  //     .pipe();
  // }

}
