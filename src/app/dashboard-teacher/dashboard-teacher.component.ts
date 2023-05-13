import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder,  Validators } from '@angular/forms';
@Component({
  selector: 'app-dashboard-teacher',
  templateUrl: './dashboard-teacher.component.html',
  styleUrls: ['./dashboard-teacher.component.scss']
})
export class DashboardTeacherComponent implements OnInit {
  Username:string="";
  Password:string="";
  constructor(private router :Router) { }
  gotopage (pagename:string): void{
    this.router.navigate([`${pagename}`]);
  }
login(){
 
     this.gotopage ('kk')
}
ngOnInit(): void {
}

}
