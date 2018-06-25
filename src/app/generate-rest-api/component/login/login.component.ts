import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../service/signup.service';
import { User } from '../../model/user';
import { Router } from '@angular/router';
import { MessageObject } from '../../model/MessageObject';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  constructor(
    private router: Router, private signupService: SignupService,
    private _route: Router
  ) { }

  ngOnInit() {

  };
  onloginSubmit(): void {
    const user: User = new User();
    // if (!user.username || !user.password) {
    //   alert("Username and Password must be not blank!");
    //   return;
    // }
    this.signupService.loginUser(this.user)
      .subscribe(data => {
        const res = data as MessageObject;
        if (res) {
          alert("Login Successfully!  " + res.data)
          this._route.navigate(['/summary']);
        }
        else {
          alert("Login Failed! Please, try it again! " + res.data)
          this._route.navigate(['/login']);
        }
      });
  }

}
