import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageServiceService } from './local-storage-service.service';

@Injectable()
export class AuthService {

  token: any;
  constructor(
    private myRoute: Router,

  ) {

  }

  sendToken(token: string) {
    var myObject = {
      id: (new Date).getTime(),
      name: token,
    }
    localStorage.setItem('currentUser', JSON.stringify(myObject.id));
  }

  getToken() {
    // var item = JSON.parse(localStorage.getItem("currentUser"));
    // return item.name;
    return localStorage.getItem("currentUser");

  }

  isLoggednIn() {
    return this.getToken() !== null && this.getCookie("currentUser") !== null;
  }
  logout() {
    localStorage.removeItem("currentUser");
    //localStorage.clear();
    this.deleteAllCookies();
    this.myRoute.navigate(["login"]);
  }


  setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return ca;
  }


  deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }
}
