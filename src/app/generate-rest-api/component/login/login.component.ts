import { Component, OnInit } from '@angular/core';
import  { SignupService } from '../../service/signup.service';
import { SignUp } from '../../model/signup';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user : SignUp[];

  constructor(
    private router: Router, private signupService: SignupService
  ) { }

  ngOnInit() {
    this.signupService.getUsers()
      .subscribe( data => {
        this.user = data;
      });
  };

}
