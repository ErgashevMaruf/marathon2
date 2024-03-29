import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CaruselComponent } from './carusel/carusel.component';
import { CarouselModule } from 'primeng/carousel';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { TableModule } from 'primeng/table';
import { ScoreComponent } from './score/score.component';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { ScrollTopModule } from 'primeng/scrolltop';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DiagrammComponent } from './diagramm/diagramm.component';
import { TranslocoModule } from '@ngneat/transloco';
import { NearestComponent } from './nearest/nearest.component';
import { AdvertisingComponent } from './advertising/advertising.component';
import { EventsInfoComponent } from './eventsInfo/eventsInfo.component';
import { MyEventsComponent } from './myEvents/myEvents.component';
import { Route, RouterModule } from '@angular/router';
@NgModule({
    declarations: [
        CaruselComponent,
        FooterComponent,
        ScoreComponent,
        DiagrammComponent,
        NearestComponent,
        AdvertisingComponent,
        EventsInfoComponent,
        MyEventsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CarouselModule,
        MatIconModule,
        TableModule,
        DropdownModule,
        TagModule,
        ScrollTopModule,
        NgApexchartsModule,
        TranslocoModule,
        RouterModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CaruselComponent,
        FooterComponent,
        ScoreComponent,
        DiagrammComponent,
        NearestComponent,
        AdvertisingComponent,
        EventsInfoComponent,
        MyEventsComponent
    ]
})
export class SharedModule {
}
