import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PFE';
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
