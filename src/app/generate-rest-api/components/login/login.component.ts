import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../service/signup.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { MessageObject } from '../../models/MessageObject';
import { AlertService } from '../../service/alert.service';
import { delay } from 'q';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;
  form;
  constructor(
    private signupService: SignupService,
    private _route: Router,
    private alertService: AlertService,
    private auth: AuthService,

  ) {

  }

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

    // this.auth.sendToken(this.form.value.username);
    // // this._route.navigate(['/home']);

    this.signupService.loginUser(userName, password)
      .subscribe(data => {
        const requestMessages = data as MessageObject;
        if (requestMessages.data.endsWith("Username")) {
          this.alertService.error(requestMessages.data);
          this.resetForm();
          this._route.navigate(['/login']);
        } else if (requestMessages.data.endsWith("Password!")) {
          this.alertService.error(requestMessages.data);
          this.resetForm();
          this._route.navigate(['/login']);
        } else if (requestMessages.data.endsWith("Password")) {
          this.alertService.error(requestMessages.data);
          this.resetForm();
          this._route.navigate(['/login']);
        } else if (requestMessages.data.endsWith("exist!")) {
          this.alertService.error(requestMessages.data);
          this.resetForm();
          this._route.navigate(['/login']);
        } else {
          this.alertService.success(requestMessages.data);
          this._route.navigate(['/home']);
          this.auth.sendToken(userName);
        }
      },
        (error: HttpErrorResponse) => {
          this.resetForm();
          alert('Technical Issue');
        }
      );
  }


}


