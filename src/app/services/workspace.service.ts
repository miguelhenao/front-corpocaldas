import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { WorkSpaceRequestPayload } from '../helpers/classes/workspace';

const BASE_URL = environment.gateway;

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {
  constructor(private http: HttpClient) {}

  list(): Observable<WorkSpaceRequestPayload[]> {
    return this.http.get<WorkSpaceRequestPayload[]>(`${BASE_URL}/workspaces`);
  }

  create(workspace: WorkSpaceRequestPayload): Observable<WorkSpaceRequestPayload> {
    return this.http.post<WorkSpaceRequestPayload>(`${BASE_URL}/workspaces`, workspace);
  }

  update(workspace: WorkSpaceRequestPayload): Observable<WorkSpaceRequestPayload> {
    return this.http.put<WorkSpaceRequestPayload>(`${BASE_URL}/workspaces/${workspace.id}`, workspace);
  }

  read(id: number): Observable<WorkSpaceRequestPayload> {
    return this.http.get<WorkSpaceRequestPayload>(`${BASE_URL}/workspaces/${id}`);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${BASE_URL}/workspaces/${id}`);
  }
}
