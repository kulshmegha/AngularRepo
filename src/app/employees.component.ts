import {Component} from '@angular/core'
import { Employee } from './Employee'
import { EmployeesService } from './EmployeesService'
import { Users } from './Users'

@Component({
    selector: 'emps-app',
    template: `<h1>Employees Detail Component</h1>
              <ul>
                <li *ngFor = "let emp of employees">
                   {{emp.name}}
                </li>
              </ul> 
              <ul>
                <li *ngFor = "let user of users ">{{user.userId}}-{{user.id}}-{{user.title}}-{{user.completed}}</li>
              </ul>
              <br>
              <emps-details-app></emps-details-app>
              <br>
              <emps-list-app></emps-list-app>
              `,
    providers:[EmployeesService]          
})

export class EmployeesComponent{ 
    employees : Employee[]
    users : Users[]
    constructor(private _employeeService: EmployeesService){
        //this.employees = _employeeService.getEmployees()
        this._employeeService.getEmployees().subscribe(res =>  this.employees = res) 
        this._employeeService.getToDos().subscribe(res => this.users = res)
    }  
}