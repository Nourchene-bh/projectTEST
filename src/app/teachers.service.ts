import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  tab: any[] = [];
  constructor(private http:HttpClient) {}
  getAPIData():Observable<any>{
    return this.http.get<any>('http://localhost:3000/attendance')
  }
  getstudents():Observable<any>{
    return this.http.get<any>('http://localhost:3000/students')
  }
  getteacher():Observable<any>{
    return this.http.get<any>('http://localhost:3000/teachers')
  }
 
  getclassroom():Observable<any>{
    return this.http.get<any>('http://localhost:3000/classroom')
  }
  getclassrooms():Observable<any>{
    return this.http.get<any>('http://localhost:3000/classrooms')
  }
  getreal():Observable<any>{
    return this.http.get<any>('http://localhost:3000/real')
  }
  setTabData(data: any[]) {
    this.tab = data;
  }

  getTabData() {
    return this.tab;
  }
  modifyattendance(data:any,id:string){
    return this.http.put<any>('http://localhost:3000/attendance/'+id,data)
   }
}