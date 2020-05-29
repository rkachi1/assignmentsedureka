import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductComponent } from './components/product/product.component';
import { NewemployeeComponent } from './components/newemployee/newemployee.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { TemplateformComponent } from './components/templateform/templateform.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';


const routes: Routes = [
  {path:'home', component:HomeComponent,pathMatch:'full'},
  {path:'employee', component:EmployeeComponent,pathMatch:'full'},
  {path:'newemployee',component:NewemployeeComponent,pathMatch:'full'},
  {path:'product', component:ProductComponent,pathMatch:'full'},
  {path:'contact', component:ContactComponent,pathMatch:'full'},
  {path:'',component:EmployeeComponent,pathMatch:'full'},
  {path:'products',component:ProductComponent,pathMatch:'full'},
  {path:'productlist/:id',component:ProductListComponent,pathMatch:'full'},
  {path:'templateform',component:TemplateformComponent,pathMatch:'full'},
  {path:'reactiveform',component:ReactiveformComponent,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
