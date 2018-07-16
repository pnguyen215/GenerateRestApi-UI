import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { SignupService } from '../../service/signup.service';
import { AuthService } from '../../service/auth.service';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: any;
  checkCurrentUser(){
    var user = this.auth.getCookie("currentUser");
    if(user != ""){
      this.currentUser = this.auth.getCookie("currentUser");
      return this.currentUser;
    }else{
      return this.currentUser = "";
    }
  }
  users: User[] = [];
  constructor(
    private userService: SignupService,
    private auth: AuthService,
  ) {

  }

  ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser(username: String) {
    this.userService.deleteCurrentUser(username).subscribe(() => { this.loadAllUsers() });
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(users => { this.users = users; });
  }

}
