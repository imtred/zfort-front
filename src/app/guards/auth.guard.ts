import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  auth: any = {};

  constructor(private router: Router, private _auth: AuthService) {}

  canActivate(): boolean {
    if (this._auth.isAuthorized()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
