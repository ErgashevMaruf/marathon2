import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DashboardComponent} from 'app/modules/user/dashboard/dashboard.component';
import { SharedModule } from 'app/shared/shared.module';
import { TableModule } from 'primeng/table';
import { PayComponent } from './pay/pay.component';
import { settingsModule } from '../settings/settings.module';
import { SettingsModule } from 'app/layout/common/settings/settings.module';
const exampleRoutes: Route[] = [
    {
        path     : '',
        component: DashboardComponent
    },
];

@NgModule({
    declarations: [
        DashboardComponent,
        PayComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes),
        SharedModule,
        TableModule,
        SettingsModule
    ]
})
export class DashboardModule
{
}
