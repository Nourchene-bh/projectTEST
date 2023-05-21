import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  Username:string="";
  Password:string="";
  errorMessage: string = '';
  constructor(private router :Router) { }
  gotopage (pagename:string): void{
    this.router.navigate([`${pagename}`]);
  }
login(){
  if(this.Username == "" || this.Password == ""){  
    this.errorMessage = 'Please enter your username and password.';}
  else if(this.Username == "Sofiene" && this.Password == "teacher"){  
    alert('hello')
    this.gotopage ('class')
}
else if(this.Username == "t" && this.Password == "t"){  
  alert('Welcome')
  this.gotopage ('class')
}
else if(this.Username == "Administrator" && this.Password == "admin"){  
  alert('hello')
  this.gotopage ('classrooms')}
else {
  this.errorMessage = 'Wrong username or password. Please try again.';
 // this.gotopage ('dashboard')

}
    //  this.gotopage ('class')
}
ngOnInit(): void {
}
}
