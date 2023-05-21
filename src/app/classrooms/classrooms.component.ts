import {AfterViewInit, Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { TeachersService } from '../teachers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.scss']
})
export class ClassroomsComponent {
  displayedColumns: string[] = ['UID',  'access' ,'timestamp' ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  constructor(private service:TeachersService ) {}
//  ngOnInit(): void {    
// this.getDataFromAPI();
// }

// getDataFromAPI(){
//   // this.service. getstudents()
//   this.service.getclassroom()
//   .subscribe((res)=>{
// //     next:(res)=>{

//      console.log(res);
  
//    this.dataSource= new MatTableDataSource(res);
//     this.dataSource.paginator=this.paginator;
//     this.dataSource.sort= this.sort
// // },
// // error:(err)=>{
// //     alert("error")
// //   }

// })
// }


 
// applyFilter(event: Event) {
//    const filterValue = (event.target as HTMLInputElement).value;
//    this.dataSource.filter = filterValue.trim().toLowerCase();
//  }
// }




ngOnInit(): void {
  this.getDataFromAPI();
}

getDataFromAPI(): void {
  this.service.getclassroom()
    .subscribe((res) => {
      const result = res.result;
      const transformedData = Object.keys(result).map(key => ({ id: key, ...result[key] }));
      this.dataSource = new MatTableDataSource(transformedData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
}

applyFilter(event: Event): void {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
}