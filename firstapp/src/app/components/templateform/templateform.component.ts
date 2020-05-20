import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.scss']
})
export class TemplateformComponent implements OnInit {

  formdetails:any[] =[];
  constructor() { }

  ngOnInit(): void {
  }

  submitform(form){
    this.formdetails.push(form.value);
  }
}
