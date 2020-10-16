import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee.component';
import { CustomerComponent } from './customer.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './products/product.component';

import { EmployeesComponent } from './employees.component';
import { EmployeesDetailsComponent } from './employeesdetails.component';
import { EmployeesListComponent } from './employeeslist.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,EmployeeComponent,CustomerComponent,ProductComponent,EmployeesComponent,EmployeesDetailsComponent, EmployeesListComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [EmployeesComponent]
})
export class AppModule { }
