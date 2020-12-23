import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';


export const AppRoutes: Routes = [
    {
        path: '',
        loadChildren: './front-office/front-office.module#FrontOfficeModule',
    },
    {
        path: 'adminPanel',
        loadChildren: './back-office/back-office.module#BackOfficeModule',
    },
    {
        path: '',
        loadChildren: './auth/auth.module#AuthModule'
    },

];
