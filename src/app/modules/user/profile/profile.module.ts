import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { ProfileComponent } from './profile.component';
import { PersonalInfoComponent } from './personalInfo/personalInfo.component';
import { CalendarModule } from 'primeng/calendar';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';
import { ClubComponent } from './club/club.component';

const profileRoutes: Route[] = [
    {
        path     : '',
        component: ProfileComponent
    },
];

@NgModule({
    declarations: [
        ProfileComponent,
        PersonalInfoComponent,
        ClubComponent
    ],
    imports     : [
        RouterModule.forChild(profileRoutes),
        SharedModule,
        CalendarModule,
        PasswordModule,
        DropdownModule,
    ]
})
export class profileModule
{
}
