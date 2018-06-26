import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common//http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';
const httpOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class SignupService {
  private apiUrl = environment.serverURL + 'v1/user';
  constructor(
    private http: HttpClient
  ) { }

  public createUser(user: User): Observable<any> {
    const body: User = {
      username: user.username,
      password: user.password
    }
    return this.http.post(this.apiUrl + '/registration', body, httpOption);
  }
  public loginUser(username, password): Observable<any> {
    var data = "username=" + username + "&password=" + password + "&grant_type=password";
    return this.http.post(this.apiUrl + '/token', data, httpOption);

  }

}