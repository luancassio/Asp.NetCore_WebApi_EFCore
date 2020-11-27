import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { StudentsComponent } from './students/students.component';
import { AppComponent } from './app.component';
import { TeachersComponent } from './teachers/teachers.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo: 'dashboard', pathMatch: 'full'},
  {path:'dashboards', component: DashboardComponent},
  {path:'students', component: StudentsComponent},
  {path:'teachers', component: TeachersComponent},
  {path:'profile', component: ProfileComponent},
  {path:'dashboard', component: DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
