import { Route } from '@angular/router';
import { EventsComponent } from './events.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { EventsResolver,eventResolver } from './events.resolvers';
export const eventsRoutes: Route[] = [
    {
        path     : '',
        component: EventsComponent,
        resolve  : {
            categories: EventsResolver
        },
        children : [
            {
                path     : '',
                pathMatch: 'full',
                component: ListComponent,
                resolve  : {
                    courses: EventsResolver
                }
            },
            {
                path     : ':id',
                component: DetailsComponent,
                resolve  : {
                    course: eventResolver
                }
            }
        ]
    }
];