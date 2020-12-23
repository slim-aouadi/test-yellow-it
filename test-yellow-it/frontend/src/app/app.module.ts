import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrontOfficeComponent } from './front-office/front-office.component';
import { BackOfficeComponent } from './back-office/back-office.component';
import { AppRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import { BackOfficeModule } from './back-office/back-office.module';
import { FrontOfficeModule } from './front-office/front-office.module';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptor } from './services/security/auth.interceptor';
import { ErrorInterceptor } from './services/security/error.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/security/auth.service';
import { StorageService } from './services/security/storage.service';
import { TokenStorageService } from './services/security/token.storage';
import { AuthGuard } from './services/security/auth.guard';
import { RoleGuard } from './services/security/role.guard';
import { DashboardSidebarComponent } from './layout/dashboard-sidebar/dashboard-sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
  ],
  imports: [
    BackOfficeModule,
    FrontOfficeModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, { scrollPositionRestoration: 'enabled' }),
  ],
  providers: [
    AuthService,
    StorageService,
    TokenStorageService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
