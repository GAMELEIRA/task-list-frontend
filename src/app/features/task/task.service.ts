import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PRODUCTION_URL } from '../../enviroment';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private URL_BASE = `${PRODUCTION_URL}/tasks`;
  private GET_TASK = `${this.URL_BASE}/user`;

  constructor(private httpClient: HttpClient) {}

  public getTasks = (idUser: number): Observable<Array<Task>> => {
    return this.httpClient.get<Array<Task>>(`${this.GET_TASK}/${idUser}`);
  };
}
