import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { StorageService } from './storage.service';
import { TokenStorageService } from './token.storage';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router, private tokenStorage: TokenStorageService) {
  }


  canActivate() {

    if (this.tokenStorage.getToken()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

  canActivateChild() {
    if (this.tokenStorage.getToken()) {
      // logged in so return true
      return true;
    }
    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;
  }

}
