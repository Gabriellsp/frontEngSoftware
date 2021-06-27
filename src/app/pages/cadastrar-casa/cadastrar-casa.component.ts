import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-cadastrar-casa',
  templateUrl: './cadastrar-casa.component.html',
  styleUrls: ['./cadastrar-casa.component.scss']
})
export class CadastrarCasaComponent implements OnInit {

  form: FormGroup;

  constructor(
    fb: FormBuilder,
    private readonly http: HttpClient
    
    ) {
    this.form =  fb.group({
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
    });
  }

  ngOnInit(): void {
  }

  cadastrar(){

   console.log(this.form.value);

   this.post(this.form.value);
   
  }


   post<T>(data: any): Observable<T> {
    const httpOptions = {
      headers: new HttpHeaders("Content-Type: application/json")
    };
    const url = 'http://localhost:3000/casa/create/';
    return this.http.post<T>(url, data, httpOptions)
      .pipe(map((response: T) => {
        console.log('dentrooooooooo');
        return response;
      }))
      .pipe();
  }

}
