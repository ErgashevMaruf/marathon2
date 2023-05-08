import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FeedbackComponent } from './feedback.component';
import { SharedModule } from 'app/shared/shared.module';
const feedbackRoutes: Route[] = [
    {
        path     : '',
        component: FeedbackComponent
    },
];

@NgModule({
    declarations: [
        FeedbackComponent
    ],
    imports     : [
        RouterModule.forChild(feedbackRoutes),
        SharedModule
    ]
})
export class feedbackModule
{
}
