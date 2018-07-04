import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../service/signup.service';
import { User } from '../../model/user';
import { Router } from '@angular/router';
import { MessageObject } from '../../model/MessageObject';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;
  constructor(
    private router: Router, private signupService: SignupService,
    private _route: Router
  ) { }

  ngOnInit() {
    this.resetForm();
  };

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.user = {
      username: '',
      password: ''
    }
  }

  onloginSubmit(userName, password) {


    this.signupService.loginUser(userName, password)
      .subscribe(data => {
        const requestMessages = data as MessageObject;
        if (requestMessages.data.endsWith("Username")) {
          alert(requestMessages.data);
          alert("Please! Try it again.")
          this._route.navigate(['/login']);
        } else if (requestMessages.data.endsWith("Password!")) {
          alert(requestMessages.data);
          alert("Please! Try it again.")
          this._route.navigate(['/login']);
        } else if (requestMessages.data.endsWith("Password")) {
          alert(requestMessages.data);
          alert("Please! Try it again.")
          this._route.navigate(['/login']);
        }
        else {
          alert(requestMessages.data);
          this._route.navigate(['/summary']);
        }
      },
        (err: HttpErrorResponse) => {
          this.resetForm();
          alert('Technical Issue');
        }
      );
  }


}