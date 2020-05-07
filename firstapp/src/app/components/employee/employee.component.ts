import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';
import { Employee } from 'src/models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees:Employee[] = [];
  constructor(private http:HttpClient,private employeeservice:EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.getEmployeedetails();
  }

  getEmployeedetails(){
    this.employeeservice.getEmployees().subscribe(
      data=>{
      console.log(data);
    })
  }

}
