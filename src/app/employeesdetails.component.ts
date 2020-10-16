import {Component} from '@angular/core'
import { Employee } from './Employee'
import { EmployeesService } from './EmployeesService'


@Component({
    selector: 'emps-details-app',
    template: `<h1>Employees Details - All Details</h1>
              <ul>
                <li *ngFor = "let emp of employees">
                   {{emp.employeeId}} - {{emp.name}} - {{emp.salary}}
                </li>
              </ul> `
})

export class EmployeesDetailsComponent{ 
    employees : Employee[]
       
    constructor(private _employeesService:EmployeesService){
       // this.employees = this._employeesService.getEmployees() 
        this._employeesService.getEmployees().subscribe(res =>  this.employees = res) 
    }
    
}