import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Bairro } from '../models/bairro';


@Injectable({
  providedIn: 'root'
})
export class BairroService {
  url = 'http://localhost:3000/bairro';
  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  saveBairro(bairro: Bairro): Observable<Bairro> {
    return this.httpClient.post<Bairro>(`${this.url}/create`, JSON.stringify(bairro), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )    
  }

  getListBairro(): Observable<Bairro []> {
    return this.httpClient.get<Bairro[]>(`${this.url}/get`);   
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
