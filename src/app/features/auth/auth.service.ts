import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PRODUCTION_URL } from '../../enviroment';
import { CreateUser } from '../../shared/models/create-user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private URL_BASE = `${PRODUCTION_URL}/auth`;
  private CREATE_ACCOUNT_URL = `${PRODUCTION_URL}/users`;

  constructor(private httpClient: HttpClient) {}

  public createAccount = (body: CreateUser): void => {
    console.log(body, this.CREATE_ACCOUNT_URL);
    this.httpClient.post(this.CREATE_ACCOUNT_URL, body).subscribe((res) => {
      console.log(res);
    });
  };
}
