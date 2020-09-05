import { Injectable } from '@angular/core';
import { Conversation } from '../shared/Conversation';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {

  readonly baseUrl = 'http://localhost:3001/api';

  constructor(private http: HttpClient) { }

  startWelcomeMessage(conversation: Conversation): Observable<Conversation> {
    return this.http.post<Conversation>(`${this.baseUrl}/mensagem`, conversation);
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
