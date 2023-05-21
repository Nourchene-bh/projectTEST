import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {TeachersService} from '../teachers.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  @Input() public table: any;
  tableResulatat:any;
  tabData: any;
  displayedColumns: string[] = ['cin','Name', 'last','level', 'subjects','is_present'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: TeachersService) {
  }

  ngOnInit(): void {
    this.tabData = this.service.getTabData();
    console.log(this.tabData);
    this.service.getstudents()
      .subscribe((res) => {
//     next:(res)=>{

        // this.dataSource = new MatTableDataSource(res);
        let data: any[] = [];
        let subject = this.tabData[0];
        let level = this.tabData[1];
        res.forEach(function (student: any) {
          console.log(student.level )
          if (student.level === level) {
            let matchedSubject = student.subjects.find((subj: any) => subj.name.trim() === subject.trim());
            if (matchedSubject) {
              student.subjects = [matchedSubject]; // Keep only the matched subject in the subjects array
              data.push(student);
              console.log(data);
            }
          }
         
        })
        console.log(data);
        data.length==0 ? this.dataSource = new MatTableDataSource(res):  this.dataSource = new MatTableDataSource(data);
        console.log(res);
        this.tableResulatat=res
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort

      })
  }

  getDataFromAPI() {
    return this.service.getTabData();

  }
   printPage() {
    window.print();
  }
  
  // Example usage

  edit(id: string) {
    const data = {
      is_present: false,
      // Add other properties if needed
    };
  
    // this.service.modify(data, id).subscribe(
    //   (response) => {
    //     alert('Attendance modified successfully');
    //     this.service.getAPIData()
    //     // Handle the response or perform any additional actions
    //   },
    //   (error) => {
    //     console.error('Failed to modify attendance', error);
    //     // Handle the error or display an error message
    //   }
    // );
  }
  gotoanother(){

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}



