import { Routes } from '@angular/router';
import { FrontOfficeComponent } from './front-office.component';
import { HomeComponent } from './home/home.component';


export const FrontOfficeRoutes: Routes = [
    {
        path: '',
        component: FrontOfficeComponent,
        children: [
            {
                path: '', component: HomeComponent
            },
        ]
    },
];
