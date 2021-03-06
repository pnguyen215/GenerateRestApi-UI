import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { SignupService } from '../../service/signup.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser: any;
  checkCurrentUser(){
    var user = this.auth.getCookie("currentUser");
    if(user != ""){
      return this.currentUser = user;
    }else{
      return this.currentUser = "";
    }
  }
  constructor(
    private auth: AuthService,
    private signupService: SignupService, ) { }

  ngOnInit() {

  }


}
