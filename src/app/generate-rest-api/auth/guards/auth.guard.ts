import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../service/auth.service';
import { AlertService } from '../../service/alert.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    public auth: AuthService,
    public router: Router,
    private alertService: AlertService, ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isLoggednIn()) {
      return true;
    } else {
      this.alertService.error("You need sign up or sign in to view this page!");
      this.router.navigate(['/login']);
      return false;
    }
  }
}
