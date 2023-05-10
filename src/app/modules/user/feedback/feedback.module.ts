import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FeedbackComponent } from './feedback.component';
import { SharedModule } from 'app/shared/shared.module';
import { DropdownModule } from 'primeng/dropdown';
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
        SharedModule,
        DropdownModule
    ]
})
export class feedbackModule
{
}
