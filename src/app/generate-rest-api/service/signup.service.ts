import { Injectable } from '@angular/core';
import { SignUp } from '../model/signup';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common//http';
const httpOption = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};


@Injectable()
export class SignupService {
  private apiUrl = '/user/registration';
  constructor(
    private http:  HttpClient
  ) { }
  public getUsers<SignUp>(): Observable<any>{
    return this.http.get<SignUp>(this.apiUrl);
  }
  public getSingleUser<SignUp>(password: SignUp): Observable<any>{
    return this.http.get<SignUp>(this.apiUrl + password);
  }
  public createUser<SignUp>(user): Observable<any>{
    return this.http.post<SignUp>(this.apiUrl,httpOption, user);
  }

}