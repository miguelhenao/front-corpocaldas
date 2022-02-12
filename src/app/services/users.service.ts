import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserPayload } from '../helpers/classes/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  list(): Observable<UserPayload[]> {
    return this.http.get<UserPayload[]>(``);
  }

  create(user: UserPayload): Observable<UserPayload> {
    return this.http.post<UserPayload>('', user);
  }

  update(user: UserPayload): Observable<string> {
    return this.http.put<string>('', user);
  }

  read(id: string): Observable<UserPayload> {
    return this.http.get<UserPayload>(`${id}`);
  }
}
