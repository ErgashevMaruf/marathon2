import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { SettingsComponent } from './settings.component';
import { DropdownModule } from 'primeng/dropdown';
const settingsRoutes: Route[] = [
    {
        path: '',
        component: SettingsComponent
    },
];

@NgModule({
    declarations: [
        SettingsComponent
    ],
    imports: [
        RouterModule.forChild(settingsRoutes),
        SharedModule,
        DropdownModule
    ]
})
export class settingsModule {
}
