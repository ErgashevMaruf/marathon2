import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { PayComponent } from './pay.component';
const payRoutes: Route[] = [
    {
        path     : '',
        component: PayComponent
    },
];

@NgModule({
    declarations: [
        PayComponent
    ],
    imports     : [
        RouterModule.forChild(payRoutes),
        SharedModule
    ]
})
export class PayModule
{
}
