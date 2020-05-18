import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products:Product[] = [];

  constructor(private http:HttpClient, private productservice:ProductService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
      this.productservice.getproductlist().subscribe(
        data=>{
            this.products = data;
        },
        error=>{
                
        })
    }

}
