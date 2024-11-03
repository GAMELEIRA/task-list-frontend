import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PRODUCTION_URL } from '../../enviroment';
import { User } from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private URL_BASE = `${PRODUCTION_URL}/auth`;
  private CREATE_ACCOUNT_URL = `${PRODUCTION_URL}/users`;

  constructor(private httpClient: HttpClient) {}

  public createAccount = (body: User): Observable<any> => {
    return this.httpClient.post(this.CREATE_ACCOUNT_URL, body);
  };

  public login = (body: Credential): Observable<any> => {
    return this.httpClient.post(this.URL_BASE, body);
  };
}
