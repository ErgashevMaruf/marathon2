import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ScoresComponent } from './scores.component';
import { SharedModule } from 'app/shared/shared.module';
const scoreRoutes: Route[] = [
    {
        path     : '',
        component: ScoresComponent
    },
];

@NgModule({
    declarations: [
        ScoresComponent
    ],
    imports     : [
        RouterModule.forChild(scoreRoutes),
        SharedModule
    ]
})
export class ScoresModule
{
}
