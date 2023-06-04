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
import { TableModule } from 'primeng/table';
import { ClubsComponent } from './clubs/clubs.component';
import { OrganizersComponent } from './organizers/organizers.component';
import { CarouselModule } from 'primeng/carousel';
import { InfoComponent } from './info/info.component';
import { VideoGalleryComponent } from '../videoGallery/videoGallery.component';
import { CountUpDirective } from 'app/core/directives/countUpDirective';
import { NavComponent } from './nav/nav.component';
import { SettingsModule } from 'app/layout/common/settings/settings.module';
@NgModule({
    declarations: [
        LandingHomeComponent,
        AnnouncementComponent,
        GalleryComponent,
        PartnersComponent,
        VideoComponent,
        ClubsComponent,
        OrganizersComponent,
        InfoComponent,
        VideoGalleryComponent,
        CountUpDirective,
        NavComponent,
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
        TranslocoModule,
        TableModule,
        MatIconModule,
        CarouselModule,
        SettingsModule
    ]
})
export class LandingHomeModule {
}
