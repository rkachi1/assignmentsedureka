import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  id:number;
  details:Product[] =[];

  constructor(private router:Router, 
    private productservice:ProductService,
    private http:HttpClient, 
    private route:ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productservice.getproductbyid(this.id).subscribe(data=>{
        this.details = data;
    })
  }
  

}
