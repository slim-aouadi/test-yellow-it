import { Routes } from '@angular/router';

import { LoginComponent } from './Login/Login.component';
import { SignupComponent } from './signup/signup.component';

export const AuthRoutes: Routes = [{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
}, {
    path: '',
    children: [{
        path: 'login',
        component: LoginComponent
    }, {
        path: 'signup',
        component: SignupComponent
    }]
}];
