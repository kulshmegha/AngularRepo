import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h3>Routing Application</h3>
             <a routerLink="departments">Departments</a>| 
             <a routerLink="employees"> Employees </a>|
             <a routerLink="customers"> Customers </a>
             <router-outlet></router-outlet>
              `,
})
export class AppComponent 
{
   
}
