import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { Router } from '@angular/router';
import { SignupService } from '../../service/signup.service';
import { MessageObject } from '../../model/MessageObject';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  user: User = new User();
  constructor(
    private router: Router, private signupService: SignupService, private _route: Router
  ) { }

  ngOnInit() {
  }
  createUser(): void {
    this.signupService.createUser(this.user)
      .subscribe(data => {
        const res = data as MessageObject;
        if (res) {
          alert("Account available: " + res.data)
          this._route.navigate(['/login']);
        }
        else {
          alert("Technical issue")
        }
      });
  }
}


