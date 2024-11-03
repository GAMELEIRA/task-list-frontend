import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PRODUCTION_URL } from '../../enviroment';
import { CreateUser } from '../../shared/models/create-user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private URL_BASE = `${PRODUCTION_URL}/auth`;
  private CREATE_ACCOUNT_URL = `${PRODUCTION_URL}/users`;

  constructor(private httpClient: HttpClient) {}

  public createAccount = (body: CreateUser): Observable<any> => {
    console.log(body, this.CREATE_ACCOUNT_URL);
    return this.httpClient.post(this.CREATE_ACCOUNT_URL, body);
  };
}
