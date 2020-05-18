import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Product} from '../../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

const headeroptions = new HttpHeaders({'Content-Type':'application/json'});

@Injectable({
  providedIn: 'root'

})
export class ProductService {

  private resturl : String = 'http://localhost:3000/product/';

  constructor(private http:HttpClient, private router:Router, private route:ActivatedRoute) { }
  
  getproductlist():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:3000/product",{headers:headeroptions});
  }

  getproductbyid(id):Observable<Product[]>{
    return this.http.get<Product[]>(`${this.resturl}?id=${id}`,{headers:headeroptions});
  }
}
