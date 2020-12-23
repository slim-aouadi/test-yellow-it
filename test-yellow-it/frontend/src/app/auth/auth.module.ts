import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutes } from './auth.routing';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './Login/Login.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(AuthRoutes),
        ReactiveFormsModule,
    ],
    declarations: [
        LoginComponent,
        SignupComponent,
    ]
})

export class AuthModule {
}
