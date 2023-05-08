import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { EventsComponent } from './events.component';
const eventsRoutes: Route[] = [
    {
        path     : '',
        component: EventsComponent
    },
];

@NgModule({
    declarations: [
        EventsComponent
    ],
    imports     : [
        RouterModule.forChild(eventsRoutes),
        SharedModule
    ]
})
export class EventsModule
{
}
