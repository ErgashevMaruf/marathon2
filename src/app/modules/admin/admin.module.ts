import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { Route} from "@angular/router";
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from './admin.resolver';
import { ProfilesComponent } from './profile/profiles/profiles.component';
import { RoleComponent } from './profile/role/role.component';
import { AlleventComponent } from './report/allevent/allevent.component';
import { ScoreComponent } from './report/score/score.component';
import { ClubComponent } from './report/club/club.component';
import { FinanceComponent } from './finance/finance.component';
import { CeventComponent } from './info/cevent/cevent.component';
import { AdvertisingComponent } from './info/advertising/advertising.component';
import { AnnouncementComponent } from './info/announcement/announcement.component';
import { CclubComponent } from './info/cclub/cclub.component';
import { PrivilegeComponent } from './privilege/privilege.component';
import { MessageComponent } from './message/message.component';
import { OrganizerComponent } from './report/organizer/organizer.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import {MatIconModule} from '@angular/material/icon';
export const routeAdmin: Route[]=[
    {
        path: '',
        canMatch: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children:[
            {path:'profiles', pathMatch:'full', component:ProfilesComponent},
            {path:'role', component:RoleComponent},
            {path: 'allevent', component:AlleventComponent},
            {path: 'score', component:ScoreComponent},
            {path:'club', component:ClubComponent},
            {path:'finance', component:FinanceComponent},
            {path: 'cevent', component:CeventComponent},
            {path: 'advertising', component:AdvertisingComponent},
            {path: 'announcement', component:AnnouncementComponent},
            {path:'cclub', component:CclubComponent},
            {path: 'privilege', component:PrivilegeComponent},
            {path:'message', component:MessageComponent},
            {path:'organizer', component:OrganizerComponent}
        ]
    }
]

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    MatIconModule
  ],
  declarations: [AdminComponent,ProfilesComponent,]
})
export class AdminModule { }
