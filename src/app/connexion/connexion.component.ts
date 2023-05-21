import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent  {
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



