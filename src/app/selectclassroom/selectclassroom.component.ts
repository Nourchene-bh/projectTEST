
import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {TeachersService} from '../teachers.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-selectclassroom',
  templateUrl: './selectclassroom.component.html',
  styleUrls: ['./selectclassroom.component.scss']
})
export class SelectclassroomComponent {

  displayedColumns: string[] = ['classroomname','action' ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  constructor(private service:TeachersService,private router :Router ) {}
 ngOnInit(): void {    
this.getDataFromAPI();
}
gotopage (pagename:string): void{
  this.router.navigate([`${pagename}`]);
}
gotoanother(){
  this.gotopage('classroom')
}

getDataFromAPI(){
  // this.service. getstudents()
  this.service. getclassrooms()
  .subscribe((res)=>{
//     next:(res)=>{

     console.log(res);
  
   this.dataSource= new MatTableDataSource(res);
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort= this.sort


})
}




 
applyFilter(event: Event) {
   const filterValue = (event.target as HTMLInputElement).value;
   this.dataSource.filter = filterValue.trim().toLowerCase();
 }
}

