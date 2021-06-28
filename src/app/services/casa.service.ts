import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Casa } from '../models/casa';
@Injectable({
  providedIn: 'root'
})


export class CasaService {
  url = 'https://cors-anywhere.herokuapp.com/http://localhost:3000/casa/create/';

  constructor(private httpClient: HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  saveCasa(casa: Casa): Observable<Casa> {
    return this.httpClient.post<Casa>(this.url, JSON.stringify(casa), this.httpOptions)
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
