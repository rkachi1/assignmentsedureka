import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { employee } from 'src/models/employeenew';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.scss']
})
export class NewemployeeComponent implements OnInit {

  newemployees:employee[]=[];

  employees:any = [];

  constructor(private employeeservice:EmployeeService) { 

  }

  ngOnInit(): void {
    this.getemployeedetailsfromurl();
  }

  getnewEmployeedetails(){
    this.employeeservice.getnewEmployees().subscribe(data=>{
        this.newemployees = data;
    })
  }

  getemployeedetailsfromurl(){
      this.employeeservice.getemployeesfromurl().subscribe(data=>{
      this.employees = data;    
    })
  }
}
