import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CaruselComponent } from './carusel/carusel.component';
import { CarouselModule } from 'primeng/carousel';
import { FooterComponent } from './footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import { TableModule } from 'primeng/table';
import { ScoreComponent } from './score/score.component';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { ScrollTopModule } from 'primeng/scrolltop';
@NgModule({
    declarations:[
        CaruselComponent,
        FooterComponent,
        ScoreComponent
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
        ScrollTopModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CaruselComponent,
        FooterComponent,
        ScoreComponent
    ]
})
export class SharedModule
{
}
