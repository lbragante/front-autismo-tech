import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../shared/User';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly baseUrl = 'http://localhost:3001/api/user'

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/all`)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getAllMentor(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/mentor`)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getAllMentored(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/mentored`)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Manipulação de erros
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
  }
}
