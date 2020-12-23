import { Routes } from '@angular/router';
import { AuthGuard } from '../services/security/auth.guard';
import { RoleGuard } from '../services/security/role.guard';
import { BackOfficeComponent } from './back-office.component';
import { AddClasseComponent } from './classe-management/add-classe/add-classe.component';
import { ClassesListComponent } from './classe-management/classes-list/classes-list.component';
import { HomeComponent } from './home/home.component';
import { AddTeacherComponent } from './teacher-management/add-teacher/add-teacher.component';
import { TeachersListComponent } from './teacher-management/teachers-list/teachers-list.component';


export const BackOfficeRoutes: Routes = [
    {
        path: 'dashboard',
        component: BackOfficeComponent,
        canActivateChild: [AuthGuard],
        data: {
            authorities: ['ROLE_USER', 'ROLE_ADMIN']
        },
        children: [
            {
                path: '', component: HomeComponent, canActivateChild: [AuthGuard],
                data: {
                    authorities: ['ROLE_USER', 'ROLE_ADMIN'],
                }
            },
            {
                path: 'new-teacher', component: AddTeacherComponent, canActivateChild: [AuthGuard],
                data: {
                    authorities: ['ROLE_USER', 'ROLE_ADMIN'],
                }
            },
            {
                path: 'teachers-list', component: TeachersListComponent, canActivateChild: [AuthGuard],
                data: {
                    authorities: ['ROLE_USER', 'ROLE_ADMIN'],
                }
            },
            {
                path: 'new-classe', component: AddClasseComponent, canActivateChild: [AuthGuard],
                data: {
                    authorities: ['ROLE_USER', 'ROLE_ADMIN'],
                }
            },
            {
                path: 'classes-list', component: ClassesListComponent, canActivateChild: [AuthGuard],
                data: {
                    authorities: ['ROLE_USER', 'ROLE_ADMIN'],
                }
            },
        ]
    },
];
