import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserPayload } from '../helpers/classes/user';
import { environment } from '../../environments/environment';

const BASE_URL = environment.gateway;
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  list(): Observable<UserPayload[]> {
    return this.http.get<UserPayload[]>(`${BASE_URL}/users`);
  }

  create(user: UserPayload): Observable<UserPayload> {
    return this.http.post<UserPayload>(`${BASE_URL}/users`, user);
  }

  update(user: UserPayload): Observable<UserPayload> {
    return this.http.put<UserPayload>(`${BASE_URL}/users/${user.id}`, user);
  }

  read(id: string): Observable<UserPayload> {
    return this.http.get<UserPayload>(`${BASE_URL}/users/${id}`);
  }
}
