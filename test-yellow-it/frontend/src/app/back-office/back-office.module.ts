import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackOfficeRoutes } from './back-office.routing';
import { RouterModule } from '@angular/router';
import { BackOfficeComponent } from './back-office.component';
import { authInterceptorProviders } from '../services/security/auth.interceptor';
import { RoleGuard } from '../services/security/role.guard';
import { AuthGuard } from '../services/security/auth.guard';
import { DashboardSidebarComponent } from '../layout/dashboard-sidebar/dashboard-sidebar.component';
import { HomeComponent } from './home/home.component';
import { AddTeacherComponent } from './teacher-management/add-teacher/add-teacher.component';
import { TeachersListComponent } from './teacher-management/teachers-list/teachers-list.component';
import { AddClasseComponent } from './classe-management/add-classe/add-classe.component';
import { ClassesListComponent } from './classe-management/classes-list/classes-list.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AffectTeacherComponent } from './classe-management/add-classe/affect-teacher/affect-teacher.component';
import { MatAutocompleteModule, MatDialogModule } from '@angular/material';
import { EditClasseComponent } from './classe-management/edit-classe/edit-classe.component';
import { EditTeacherComponent } from './teacher-management/edit-teacher/edit-teacher.component';

@NgModule({
  declarations: [BackOfficeComponent, AddTeacherComponent, TeachersListComponent, AddClasseComponent, ClassesListComponent, DashboardSidebarComponent, HomeComponent, AffectTeacherComponent, EditClasseComponent, EditTeacherComponent],
  imports: [
    RouterModule.forChild(BackOfficeRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatDialogModule,


  ],
  providers: [authInterceptorProviders, RoleGuard, AuthGuard],
  entryComponents: [AffectTeacherComponent]
})
export class BackOfficeModule {


}
