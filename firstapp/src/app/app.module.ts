import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeService } from './services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { ColorDirective } from './directives/color.directive';
import { NewemployeeComponent } from './components/newemployee/newemployee.component';
import { FilterPipe } from './pipes/filter.pipe';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { FormsModule } from '@angular/forms';
import { TemplateformComponent } from './components/templateform/templateform.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ConfirmpasswordvalidatorDirective } from './directives/confirmpasswordvalidator.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ColorDirective,
    NewemployeeComponent,
    FilterPipe,
    HomeComponent,
    ProductComponent,
    ContactComponent,
    ProductListComponent,
    TemplateformComponent,
    ReactiveformComponent,
    ConfirmpasswordvalidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
