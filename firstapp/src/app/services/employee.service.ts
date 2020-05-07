import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from 'src/models/employee';
import { Observable } from 'rxjs';


const headeroptions = new HttpHeaders({'Content-Type':'application/json'});
@Injectable({
  providedIn: 'root'
})


export class EmployeeService {

  employees:Employee[]=[];
  constructor(private http:HttpClient) {

  }


  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>("http://localhost:3000/employee",{headers:headeroptions});
  }

}
