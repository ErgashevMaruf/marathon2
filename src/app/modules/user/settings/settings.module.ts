import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { SettingsComponent } from './settings.component';
const settingsRoutes: Route[] = [
    {
        path     : '',
        component: SettingsComponent
    },
];

@NgModule({
    declarations: [
        SettingsComponent
    ],
    imports     : [
        RouterModule.forChild(settingsRoutes),
        SharedModule
    ]
})
export class settingsModule
{
}
