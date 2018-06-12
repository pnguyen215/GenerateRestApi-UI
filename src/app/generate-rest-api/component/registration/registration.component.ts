import { Component, OnInit } from '@angular/core';
import { SignUp } from '../../model/signup';
import  { SignupService } from '../../service/signup.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  sign : SignUp[];
  constructor(
    private signupService : SignupService
  ) { }

  ngOnInit() {
  }
  add(username: string, password: string, re_password : string): void{
    username = username.trim();
    if(!username || !password || !re_password)
    {
    alert('All of fields must is not blank!');
    return;
    }else if(!(password === re_password))
    {
      alert('Password is unique!');
      return;
    }
    else if((password.length) < 8){
      alert('Password must be greater than or equal to 8 characters');
      return;
    }
    const newUser: SignUp  = new SignUp();
    newUser.username = username;
    newUser.password = password;
    newUser.re_password = re_password;
    this.signupService.addUser(newUser).subscribe(insertedUser => {
        this.sign.push(insertedUser);
    });
  }
  
}
