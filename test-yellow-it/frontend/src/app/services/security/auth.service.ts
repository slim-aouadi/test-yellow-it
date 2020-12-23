import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { TokenStorageService } from './token.storage';
import { StorageService } from './storage.service';

const AUTH_API = environment.API_URL + 'api/';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'POST,GET,DELETE,PUT',
        'Access-Control-Allow-Origin': '*'
    }),
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {
    }

    login(username, password): Observable<any> {
        return this.http.post(AUTH_API + 'login_check', { username: username, password: password }, httpOptions)
            .pipe(map(response => {
                if (response['token']) {
                    const expires = 1000 * 60 * 30;

                    StorageService.set('auth-token', response['token'], expires);
                    return true;
                } else {
                    return false;
                }
            }));
    }

    register(user): Observable<any> {
        return this.http.post(environment.API_URL + 'auth/register', user, httpOptions);
    }
}
