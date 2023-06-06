import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [UserComponent]
})
export class UserModule { }
