import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { ProfileComponent } from './profile.component';
import { PersonalInfoComponent } from './personalInfo/personalInfo.component';
const profileRoutes: Route[] = [
    {
        path     : '',
        component: ProfileComponent
    },
];

@NgModule({
    declarations: [
        ProfileComponent,
        PersonalInfoComponent
    ],
    imports     : [
        RouterModule.forChild(profileRoutes),
        SharedModule
    ]
})
export class profileModule
{
}
