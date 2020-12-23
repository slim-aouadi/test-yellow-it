import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { TokenStorageService } from './token.storage';
import { StorageService } from "./storage.service";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

// import {LoginService} from './login.service';

@Injectable()
export class RoleGuard implements CanActivate, CanActivateChild {

    isOwner: any;

    constructor(
        private loginService: AuthService,
        private route: ActivatedRoute,
        private tokenService: TokenStorageService,
        private router: Router,
        private http: HttpClient
    ) {
    }

    canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (StorageService.getUser()) {
            const rolesAllowed = next.data.authorities as Array<string>;
            const userAuthorities = StorageService.getUser().user.authorities;

            if (rolesAllowed) {
                const match = this.containsAny(userAuthorities, rolesAllowed);
                if (match != null) {
                    return true;
                } else {
                    this.router.navigate(['/']);
                    return false;
                }
            } else {
                this.router.navigate(['/']);
            }
        } else {
            this.router.navigate(['/login']);
        }
        return false;
    }


    async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const parameters = new URLSearchParams(window.location.search);


        return true;
    }

    containsAny(source, target) {
        const found = source.some(role => target.includes(role.authority))
        return found;
    }



    async getRolebyUser(id: any) {
        const API_URL = environment.API_URL + 'user';
        const response = await this.http.get(API_URL + '/getExperienceOwner/').toPromise();
        return response;
    }
}
