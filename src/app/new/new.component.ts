import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import { LoginComponent } from '../../login/login.component';

import { Router } from '@angular/router';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {
  constructor(private dialog: MatDialog, private router:Router) {}

  gotopage (pagename:string): void{
    this.router.navigate([`${pagename}`]);
  }
  onclickad(){
    this.gotopage ('ad')
  }
  onclick(){
    this.gotopage ('teacher')
  }
//   openDialog(){
//     this.dialog.open(LoginComponent
//       ,
//        {
    
     
//     }
//     )
//     .afterClosed().subscribe(val=>{
   
//    })

// }
}
