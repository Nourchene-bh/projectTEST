import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent {
  constructor( private router:Router) {}

  gotopage (pagename:string): void{
    this.router.navigate([`${pagename}`]);
  }
  // onclickad(){
  //   this.gotopage ('ad')
  // }
  onclick(){
    this.gotopage ('classrooms')
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
