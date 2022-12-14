import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  private _loggedIn: boolean = false;
  constructor(private _router: Router) {}
  canActivate(): boolean {
    let temp = JSON.parse(localStorage.getItem('token')!);
    if (temp) {
      this._loggedIn = true;
    } else {
      this._loggedIn = false;
      this._router.navigate(['/login']);
    }
    return this._loggedIn;
  }
}
