import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common//http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';
import { User } from '../models/user';
import "rxjs/add/observable/of";

const httpOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = environment.serverURL + "v1/restful";
@Injectable()
export class SignupService {
  constructor(
    private http: HttpClient,

  ) {
  }

  public refresh(): void {
    window.location.reload();
  }

  public getAll(): Observable<any> {
    const url = `${apiUrl}/`;
    return this.http.get<User[]>(url, httpOption);
  }


  public createUser(user: User): Observable<any> {
    const url = `${apiUrl}/registration`;
    const body: User = {
      id: user.id,
      username: user.username,
      password: user.password
    }
    return this.http.post(url, body, httpOption);
  }

  public loginUser(username, password): Observable<any> {
    const url = `${apiUrl}/${username}`;
    var loginBody = {
      id: (new Date()).getTime(),
      username: username,
      password: password
    }

    return this.http.post(url, loginBody, httpOption);

  }

  public deleteCurrentUser(username: String): Observable<any> {
    const url = `${apiUrl}/${username}`;
    return this.http.delete(url);
  }

}