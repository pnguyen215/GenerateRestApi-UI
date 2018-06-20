import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { Router } from '@angular/router';
import { SignupService } from '../../service/signup.service';
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
        //console.log("User created successfully.");
        if (data == "Good") {
          this._route.navigate(['/login']);
        }
        else {
          alert("Account not available")
        }
      });
  }
}


