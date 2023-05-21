// import { Component, OnInit } from '@angular/core';
import {AfterViewInit, Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { TeachersService } from '../teachers.service';
import { Router } from '@angular/router';

import { FormGroup, FormBuilder,  Validators } from '@angular/forms';
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent  {
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


  this.gotopage ('y')
}
ngOnInit(): void {
}

}

