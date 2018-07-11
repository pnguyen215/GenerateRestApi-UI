import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { SignupService } from '../../service/signup.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentUser = this.auth.getToken();
  constructor(
    private auth: AuthService,
    private signupService: SignupService,) { }

  ngOnInit() {
  }

}
