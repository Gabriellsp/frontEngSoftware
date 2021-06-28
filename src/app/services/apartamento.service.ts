import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Apartamento } from '../models/apartamento';

@Injectable({
  providedIn: 'root'
})
export class ApartamentoService {

  url = 'http://localhost:3000/apartamento/create';

  constructor(private httpClient: HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  saveCasa(apartamento: Apartamento): Observable<Apartamento> {
    return this.httpClient.post<Apartamento>(this.url, JSON.stringify(apartamento), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )    
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
