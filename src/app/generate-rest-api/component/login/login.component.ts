import { Component, OnInit } from '@angular/core';
import  { SignupService } from '../../service/signup.service';
import { User } from '../../model/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user : User[];
  constructor(
    private router: Router, private signupService: SignupService
  ) { }

  ngOnInit() {
    // this.signupService.getUsers()
    //   .subscribe( data => {
    //     this.user = data;
       
    //   });
  };


}
