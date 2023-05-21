// import { Component } from '@angular/core';
import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {TeachersService} from '../teachers.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DialogcomponentComponent } from '../dialogcomponent/dialogcomponent.component';
@Component({
  selector: 'app-servteach',
  templateUrl: './servteach.component.html',
  styleUrls: ['./servteach.component.scss']
})
export class ServteachComponent {
    @Input() public table: any;
    tableResulatat:any;
    tabData: any;
  displayedColumns: string[] = ['cin','Name', 'last', 'level', 'subject','is_present','action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

 constructor(private service:TeachersService,public dialog: MatDialog ) {}
 ngOnInit(): void {
    this.service.getAPIData().subscribe((student) => {
        this.service.getreal().subscribe((real) => {
          const table = Object.keys(real.result).map(key => ({
            id: key,
            Time: real.result[key].Time,
            Value: real.result[key].Value
          }));
      
          table.forEach((currentValue: any) => {
            const matchedStudent = student.find((eleve: any) => eleve.Name === currentValue.Value);
            if (matchedStudent) {
              matchedStudent.is_present = true;
            }
          });
      
          this.tabData = this.service.getTabData();
          const level = this.tabData[1];
          const subject = this.tabData[0];
      
          let filteredStudents = student;
      
          if (level) {
            filteredStudents = filteredStudents.filter((s: any) => s.level === level);
          }
      
        //   if (subject) {
        //     filteredStudents = filteredStudents.filter((student: any) => {
        //       const matchedSubject = student.subjects.find((subj: any) => subj.name.trim() === subject.trim());
        //       return matchedSubject !== undefined;
        //     });
        //   }
      
          this.dataSource = new MatTableDataSource(filteredStudents);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      });
    });
  }
  gotoanother(){

  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogcomponentComponent, {
    //   data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    //   this.animal = result;
    });
  }

  edit(id: string) {
    const data = {
      is_present: false,
      // Add other properties if needed
    };
  
    this.service.modifyattendance(data, id).subscribe(
      (response) => {
        console.log('Attendance modified successfully');
        // Handle the response or perform any additional actions
      },
      (error) => {
        console.error('Failed to modify attendance', error);
        // Handle the error or display an error message
      }
    );
  }
  
applyFilter(event: Event) {
   const filterValue = (event.target as HTMLInputElement).value;
   this.dataSource.filter = filterValue.trim().toLowerCase();
 }
}
