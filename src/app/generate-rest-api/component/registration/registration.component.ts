import { Component, OnInit } from '@angular/core';
import { SignUp } from '../../model/signup';
import { Router } from '@angular/router';
import  { SignupService } from '../../service/signup.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  user: SignUp = new SignUp();
  constructor(
    private router: Router, private signupService : SignupService
  ) { }

  ngOnInit() {
  }
  createUser(): void {
    this.signupService.createUser(this.user)
        .subscribe( data => {
          alert("User created successfully.");
        });

  };
  }
  

