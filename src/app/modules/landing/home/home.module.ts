import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';
import { LandingHomeComponent } from 'app/modules/landing/home/home.component';
import { landingHomeRoutes } from 'app/modules/landing/home/home.routing';
import { MatDialogModule } from '@angular/material/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { AnnouncementComponent } from './announcement/announcement.component';
import { GalleriaModule } from 'primeng/galleria';
import { GalleryComponent } from './gallery/gallery.component';
import { ScrollTopModule } from 'primeng/scrolltop';
import { PartnersComponent } from './partners/partners.component';
import { LanguagesModule } from 'app/layout/common/languages/languages.module';
import { TranslocoModule } from '@ngneat/transloco';
import { VideoComponent } from './video/video.component';
@NgModule({
    declarations: [
        LandingHomeComponent,
        AnnouncementComponent,
        GalleryComponent,
        PartnersComponent,
        VideoComponent
    ],
    imports: [
        RouterModule.forChild(landingHomeRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule,
        DropdownModule,
        MatDialogModule,
        GalleriaModule,
        ScrollTopModule,
        LanguagesModule,
        TranslocoModule
    ]
})
export class LandingHomeModule {
}
