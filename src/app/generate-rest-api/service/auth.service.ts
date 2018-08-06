import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subscription } from 'rxjs/Subscription'
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/throttleTime';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Observable } from 'rxjs/Observable';
import firebase = require('firebase');


@Injectable()
export class AuthService {


  mouseEvents: Subscription;
  timer: Subscription;
  userId: String;
  token: any;
  constructor(
    private myRoute: Router,
    private afterAuth: AngularFireAuth,
    private database: AngularFireDatabase
  ) {
    this.afterAuth.authState
      .do(user => {
        if (user) {
          this.userId = user.uid
          this.updateOnConnect()
          this.updateOnDisconnect()
          this.updateOnIdle()
        }
      })
      .subscribe();
  }
  updateStatus(status: string) {
    if (!this.userId)
      return
    this.database.object(`users` + this.userId).update({ status: status })
  }
  updateOnConnect() {
    return this.database.object('/login')
      .do(connected => {
        let status = connected.$value ? 'online' : 'offline'
        this.updateStatus(status)
      })
      .subscribe()
  }
  updateOnDisconnect() {
    firebase.database().ref().child(`users/${this.userId}`)
      .onDisconnect()
      .update({ status: 'offline' })
  }
  updateOnIdle() {
    this.mouseEvents = Observable
      .fromEvent(document, 'mousemove')
      .throttleTime(2000)
      .do(() => {
        this.updateStatus('online')
        this.resetTimer()
      })
      .subscribe()
  }
  private resetTimer() {
    if (this.timer) this.timer.unsubscribe()
    this.timer = Observable.timer(5000)
      .do(() => {
        this.updateStatus('away')
      })
      .subscribe()
  }
  signOut() {
    this.updateStatus('offline')
    this.mouseEvents.unsubscribe()
    this.timer.unsubscribe()
    this.afterAuth.auth.signOut();
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
