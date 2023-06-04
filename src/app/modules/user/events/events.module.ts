import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { EventsComponent } from './events.component';
import { ListComponent } from './list/list.component';
import { eventsRoutes } from './events.routing';
import { PaymentComponent } from './payment/payment.component';
import { DetailsComponent } from './details/details.component';
import { MatIconModule } from '@angular/material/icon';
import { MethodComponent } from './payment/method/method.component';
import { CheckComponent } from './payment/check/check.component';
import { RadioButtonModule } from 'primeng/radiobutton';
@NgModule({
    declarations: [
        EventsComponent,
        ListComponent,
        DetailsComponent,
        PaymentComponent,
        MethodComponent,
        CheckComponent
    ],
    imports: [
        RouterModule.forChild(eventsRoutes),
        SharedModule,
        MatIconModule,
        RadioButtonModule
    ]
})
export class EventsModule {
}
