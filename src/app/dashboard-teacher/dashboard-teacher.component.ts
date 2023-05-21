import { Component,OnInit, EventEmitter, Output, } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder,  Validators } from '@angular/forms'
import { TeachersService } from '../teachers.service';
@Component({
  selector: 'app-dashboard-teacher',
  templateUrl: './dashboard-teacher.component.html',
  styleUrls: ['./dashboard-teacher.component.scss']
})
export class DashboardTeacherComponent implements OnInit {
  @Output() sender = new EventEmitter();

  level:string="";
  subject:string="";
 public  tab: any[]=[];
  constructor(private router :Router,
              private service: TeachersService) { }
  gotopage (pagename:string): void{
    this.router.navigate([`${pagename}`]);
  }
login(){

  this.tab.push(this.subject);
  this.tab.push(this.level);


  console.log(this.tab)
  this.service.setTabData(this.tab);
  this.sender.emit(this.tab);


  this.gotopage ('kk')
}
ngOnInit(): void {
}
logout(){
  
  this.gotopage ('teacher')
}
}


