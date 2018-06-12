import { Injectable } from '@angular/core';
import { SignUp } from '../model/signup';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common//http';
const httpOption = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};
@Injectable()
export class SignupService {
  private url = 'http://cscvieae528129:3000/registration';
  addUser(newUser: SignUp): Observable<SignUp>{
    return this.http.post<SignUp>(this.url, newUser, httpOption).pipe(
      tap((user: SignUp) => console.log[`inserted user = ${JSON.stringify(user)}`]),
    );
  }
  constructor(
    private http:  HttpClient
  ) { }

}
