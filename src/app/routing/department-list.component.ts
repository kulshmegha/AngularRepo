import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'department-app',
  template: `<h3>Department List </h3>
           <ul>
              <li *ngFor="let department of departments">
                 <a href = 'departments/{{department.id}}'>{{department.id}}</a> -
                 <button (click) = 'gotoDepartment(department.id)'> {{department.id}}</button>- {{department.name}}    
              </li>
           </ul>`,
  })
export class DepartmentListComponent 
                 
{
  constructor(private _router:Router){}
  departments = [
    { id: "1", name: "HR" },
    { id: "2", name: "Finance" },
    { id: "3", name: "BackOffice" },
    { id: "4", name: "FrontOffice" },
    { id: "5", name: "Marketing" },
  ]

  gotoDepartment(department_id){
    this._router.navigate(["departments",department_id])
     console.log(department_id)
  }

}
