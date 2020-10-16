import {Component} from '@angular/core'
import { Employee } from './Employee'
import { EmployeesData } from './EmployeesData'
import { EmployeesService } from './EmployeesService'

@Component({
    selector: 'emps-list-app',
    template: `<h1>Employees List</h1>
              <ul>
                <li *ngFor = "let emp of employees">
                   {{emp.employeeId}} - {{emp.name}}
                </li>
              </ul> `
})

export class EmployeesListComponent { 
    employees : Employee[]
    //employeesData : EmployeesData = new EmployeesData
    
    constructor(private _employeesService: EmployeesService){
        this._employeesService.getEmployees().subscribe(res => this.employees = res)   
    }
    
}