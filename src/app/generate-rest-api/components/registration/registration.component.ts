import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../../service/signup.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../models/user';
import { MessageObject } from '../../models/MessageObject';
import { AlertService } from '../../service/alert.service';
import { delay } from 'q';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  user: User;
  constructor(
    private signupService: SignupService, private _route: Router,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.user = {
      id: '',
      username: '',
      password: ''
    }
  }

  createUser(form: NgForm, password, repassword) {
    if (repassword != password) {
      this.alertService.error("Requirement confirm password correctly!");
      return ;
    } else {
      this.signupService.createUser(form.value)
        .subscribe((data: any) => {
          const requestMessages = data as MessageObject;
          if (requestMessages.data.endsWith("characters!")) {
            this.alertService.error(requestMessages.data);
            this.resetForm(form);
            this._route.navigate(['/registration']);
          } else if (requestMessages.data.endsWith("blank!")) {
            this.alertService.error(requestMessages.data);
            this.resetForm(form);
            this._route.navigate(['/registration']);
          } else if (requestMessages.data.endsWith("unique!")) {
            this.alertService.error(requestMessages.data);
            this.resetForm(form);
            this._route.navigate(['/registration']);
          } else {
            this.alertService.success(requestMessages.data);
            this.resetForm(form);
            this.signupService.refresh();
            this._route.navigate(['/login']);
          }
        },
          (err: HttpErrorResponse) => {
            this.resetForm();
            this.alertService.error('Technical Issue');
          }

        );
    }

  }
}


