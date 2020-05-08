import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from 'src/models/employee';
import { Observable } from 'rxjs';
import { employee } from 'src/models/employeenew';


const headeroptions = new HttpHeaders({'Content-Type':'application/json'});
@Injectable({
  providedIn: 'root'
})


export class EmployeeService {

  employees:Employee[]=[];
  
  newemployees:employee[] =[];

  constructor(private http:HttpClient) {

  }


  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>("http://localhost:3000/employee",{headers:headeroptions});
  }

  getnewEmployees():Observable<employee[]>{
    return this.http.get<employee[]>("http://localhost:3000/employeenew",{headers:headeroptions});
  }

}
