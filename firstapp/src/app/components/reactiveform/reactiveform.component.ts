import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {

  
  detailsform = new FormGroup({
    fullname:new FormControl(''),
    email:new FormControl(''),
    city:new FormControl(''),
    address:new FormControl(''),
    phonenumber:new FormControl(''),
    password:new FormControl(''),
    confirmpassword:new FormControl(''),

  });
  
  formdetails:any[] =[];

  constructor() { }

  ngOnInit(): void {
  }

  submitform(){
    console.log(this.detailsform.value);
    this.formdetails.push(this.detailsform.value);
  }

}
