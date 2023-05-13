import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { OverlayModule } from '@angular/cdk/overlay'
import { CdkMenuModule } from '@angular/cdk/menu'
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ AuthentificationModule}from'./authentification/authentification.module';
import { OuiComponent } from './oui/oui.component';
import { FormsModule } from '@angular/forms';
import { TeacherComponent } from './teacher/teacher.component';
import { AdministrationComponent } from './administration/administration.component';
import { DashboardTeacherComponent } from './dashboard-teacher/dashboard-teacher.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { DashboardAdministrationComponent } from './dashboard-administration/dashboard-administration.component';
import { ClassroomsComponent } from './classrooms/classrooms.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ServteachComponent } from './servteach/servteach.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    LoginComponent,
    UserComponent,
    
   
    OuiComponent,
        TeacherComponent,
        AdministrationComponent,
        DashboardTeacherComponent,
        SidenavComponent,
        HeaderComponent,
        DashboardAdministrationComponent,
        ClassroomsComponent,
        AttendanceComponent,
        StudentsComponent,
        TeachersComponent,
        ConnexionComponent,
        ServteachComponent,
       
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule ,
    MatDividerModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule,
    OverlayModule,
    CdkMenuModule,
    AuthentificationModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule ,
    AngularFirestoreModule,
    HttpClientModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
