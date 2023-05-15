import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { EventsComponent } from './events.component';
import { ListComponent } from './list/list.component';
const eventsRoutes: Route[] = [
    {
        path     : '',
        component: EventsComponent
    },
];

@NgModule({
    declarations: [
        EventsComponent,
        ListComponent
    ],
    imports     : [
        RouterModule.forChild(eventsRoutes),
        SharedModule
    ]
})
export class EventsModule
{
}
