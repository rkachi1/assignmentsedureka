import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductComponent } from './components/product/product.component';
import { NewemployeeComponent } from './components/newemployee/newemployee.component';


const routes: Routes = [
  {path:'home', component:HomeComponent,pathMatch:'full'},
  {path:'employee', component:EmployeeComponent,pathMatch:'full'},
  {path:'newemployee',component:NewemployeeComponent,pathMatch:'full'},
  {path:'product', component:ProductComponent,pathMatch:'full'},
  {path:'contact', component:ContactComponent,pathMatch:'full'},
  {path:'',component:EmployeeComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
