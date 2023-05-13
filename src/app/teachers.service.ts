import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TeachersService {

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
}
