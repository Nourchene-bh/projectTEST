import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard-administration',
  templateUrl: './dashboard-administration.component.html',
  styleUrls: ['./dashboard-administration.component.scss']
})
export class DashboardAdministrationComponent  implements OnInit {

  sideBarOpen = true;
  condition=true;
  constructor(private router:Router) {
    
  }
  
  ngOnInit(): void {
    const pathArray = window.location.pathname.split('/')
    console.log(pathArray);
    if (pathArray[2] === 'c') {
      this.condition=false;
      }
    if(pathArray[1] === '') {
      this.condition=false;
    }
    //else{
      //this.condition=false;
    //}
  }
    
  
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  
}
