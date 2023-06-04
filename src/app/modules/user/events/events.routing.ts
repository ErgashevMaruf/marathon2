import { Route } from '@angular/router';
import { EventsComponent } from './events.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { EventsResolver, eventResolver } from './events.resolvers';
import { PaymentComponent } from './payment/payment.component';
export const eventsRoutes: Route[] = [
    {
        path: '',
        component: EventsComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: ListComponent,
            },
            {
                path: ':id',
                component: DetailsComponent,
            },
            {
                path: 'pay/:id',
                component: PaymentComponent
            }
        ]
    }
];
