import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { ProfileComponent } from './profile.component';
const profileRoutes: Route[] = [
    {
        path     : '',
        component: ProfileComponent
    },
];

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports     : [
        RouterModule.forChild(profileRoutes),
        SharedModule
    ]
})
export class profileModule
{
}
