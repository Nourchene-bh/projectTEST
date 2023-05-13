import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  Username:string="";
  Password:string="";
  constructor(private router :Router) { }
  gotopage (pagename:string): void{
    this.router.navigate([`${pagename}`]);
  }
login(){
 
     this.gotopage ('class')
}
ngOnInit(): void {
}
}
