import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { MembershipComponent } from './membership/membership.component';
import { PacketsComponent } from './packets/packets.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
