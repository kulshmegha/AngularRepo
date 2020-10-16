import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list.component';
import { DepartmentListComponent } from './department-list.component';
import {AppRoutingModule, routingComponents} from './app.routing.module'


@NgModule({
  imports:      [ BrowserModule,  AppRoutingModule],
  declarations: [ AppComponent ,routingComponents],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
