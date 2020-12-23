import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontOfficeRoutes } from './front-office.routing';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FrontOfficeComponent } from './front-office.component';

@NgModule({
    declarations: [HomeComponent, FrontOfficeComponent],
    imports: [
        RouterModule.forChild(FrontOfficeRoutes),
        CommonModule
    ]
})
export class FrontOfficeModule {


}
