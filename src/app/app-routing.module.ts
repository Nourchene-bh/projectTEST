import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './new/new.component';
import { LoginComponent } from './login/login.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AdministrationComponent } from './administration/administration.component';
import { DashboardTeacherComponent } from './dashboard-teacher/dashboard-teacher.component';
import { DashboardAdministrationComponent } from './dashboard-administration/dashboard-administration.component';
import { ClassroomsComponent } from './classrooms/classrooms.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { AppComponent } from './app.component';
import{ AuthentificationModule}from'./authentification/authentification.module'
// import { ConnexionComponent } from './connexion/connexion.component';
import { ConnexionComponent } from './authentification/connexion/connexion.component';
import { ServteachComponent } from './servteach/servteach.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'c/connexion' },
  // {path :'',component:NewComponent},
  {path :'login',component:LoginComponent},
  {path :'teacher',component:TeacherComponent},
  {path :'ad',component:AdministrationComponent},
  {path :'class',component:DashboardTeacherComponent},
  {path :'attendance',component:AttendanceComponent},
  {path :'classrooms',component:ClassroomsComponent},
  {path :'students',component:StudentsComponent},
  {path :'teachers',component:TeachersComponent},
  {path :'app',component:AppComponent},
  {path :'',component:ConnexionComponent},
  {path :'kk',component:ServteachComponent},
  {
    path: 'c',
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    // component: ConnexionComponent,
  
    children: [
  {
            path: 'cn',
            loadChildren: () =>
                import(
                    './authentification/authentification.module'
                ).then(m => m.AuthentificationModule),
},
{
  path: 'connexion',
  component: ConnexionComponent,
},
],
  }]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,AuthentificationModule]
})
export class AppRoutingModule { }
