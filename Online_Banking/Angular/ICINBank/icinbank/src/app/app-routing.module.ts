import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminresetComponent } from './adminreset/adminreset.component';
import { HomesComponent } from './homes/homes.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import {UserresetComponent} from './userreset/userreset.component';
import { UsertableComponent } from './usertable/usertable.component';
const routes: Routes = [
  {path: '', component: HomesComponent},
  {path: '**', redirectTo: 'HomesComponent',pathMatch: 'full'},
  {path: 'userlogin', component: UserloginComponent},
  {path:  'userdashboard', component: UserdashboardComponent},
  {path: 'adminlogin', component: AdminloginComponent},
  {path: 'admindashboard', component: AdmindashboardComponent},
  {path: 'adminreset', component: AdminresetComponent},
  {path: 'userreset', component: UserresetComponent},
  {path: 'usertable', component: UsertableComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
