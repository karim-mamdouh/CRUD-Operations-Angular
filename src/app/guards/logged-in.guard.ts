import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoggedInGuard implements CanActivate {
  constructor(private _router: Router) {}
  canActivate(): boolean {
    let temp = JSON.parse(localStorage.getItem('token')!);
    let deactivate = true;
    if (temp) {
      this._router.navigate(['/']);
      deactivate = false;
    }
    return deactivate;
  }
}
