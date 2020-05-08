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
  constructor(private employeeservice:EmployeeService) { 

  }

  ngOnInit(): void {
    this.getnewEmployeedetails();
  }

  getnewEmployeedetails(){
    this.employeeservice.getnewEmployees().subscribe(data=>{
        this.newemployees = data;
    })
  }

}
