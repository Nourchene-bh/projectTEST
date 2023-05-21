import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { TeachersService } from '../teachers.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

  displayedColumns: string[] = ['cin','Name','last', 'level'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  constructor(private service:TeachersService ) {}
 ngOnInit(): void {    
this.getDataFromAPI();
}

getDataFromAPI(){
  this.service. getAPIData()
  .subscribe((res)=>{
//     next:(res)=>{

     console.log(res);
  
   this.dataSource= new MatTableDataSource(res);
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort= this.sort
// },
// error:(err)=>{
//     alert("error")
//   }

})
}



//   dialogRef.afterClosed().subscribe(result => {
//     console.log('The dialog was closed');

//   });
// }



// editemployee(row:any){
// this.dialog.open(FormsComponent, {
// width:'30%',
// data:row
//   }
//   )
//   .afterClosed().subscribe(val=>{
//     if(val === "Modifier"){
//      this.getDataFromAPI;
//    }
//  })

// }
// delet(id:string){
// if(confirm('êtes-vous sûr de vouloir supprimer ?'))
// // alert(id)
// //  this.empService.deleteemployee(id)
// //  .subscribe({
// //   next:(v) => {
// //     console.log(v)
// //   },
// //   error: (e) => {
// //     alert("Error")
// //     console.log(e)
// //   },
// //   complete:() => {
// //     console.log('complete')
// //     alert("Data dele")
// //   } })
// // }    

 
// this.empService.deleteemployee(id).subscribe
// (res => {
  
//    this.getDataFromAPI;
//  })
//  alert(" les données ont été supprimées avec succée "); 
 
// }
 
 // Delete(id:any){
 //   this.empService.deleteemployee(id).subscribe(res => {
 //     alert("Record Deleted");
 //     this.getDataFromAPI;
 //   })


 
applyFilter(event: Event) {
   const filterValue = (event.target as HTMLInputElement).value;
   this.dataSource.filter = filterValue.trim().toLowerCase();
 }
}

