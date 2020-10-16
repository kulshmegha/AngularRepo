import { Component } from '@angular/core';

@Component({
  selector: 'department-app',
  template: `<h3>Department List </h3>
           <ul>
              <li *ngFor="let department of departments">
                 <a href = 'departments/{{department.id}}'>{{department.id}}</a> - {{department.name}}
              </li>
           </ul>`,
  })
export class DepartmentListComponent 

{
  departments = [
    { id: "1", name: "HR" },
    { id: "2", name: "Finance" },
    { id: "3", name: "BackOffice" },
    { id: "4", name: "FrontOffice" },
    { id: "5", name: "Marketing" },
  ]

}
