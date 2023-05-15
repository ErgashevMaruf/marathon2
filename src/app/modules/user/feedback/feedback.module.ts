import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FeedbackComponent } from './feedback.component';
import { SharedModule } from 'app/shared/shared.module';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { MessageComponent } from './message/message.component';
import { EventsInfoComponent } from '../../../shared/eventsInfo/eventsInfo.component';
const feedbackRoutes: Route[] = [
    {
        path: '',
        component: FeedbackComponent
    },
];

@NgModule({
    declarations: [
        FeedbackComponent,
        MessageComponent,
        EventsInfoComponent
    ],
    imports: [
        RouterModule.forChild(feedbackRoutes),
        SharedModule,
        DropdownModule,
        FileUploadModule,
        TableModule
    ]
})
export class feedbackModule {
}
