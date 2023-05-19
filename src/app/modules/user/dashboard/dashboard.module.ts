import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DashboardComponent} from 'app/modules/user/dashboard/dashboard.component';
import { SharedModule } from 'app/shared/shared.module';
const exampleRoutes: Route[] = [
    {
        path     : '',
        component: DashboardComponent
    },
];

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes),
        SharedModule
    ]
})
export class DashboardModule
{
}
