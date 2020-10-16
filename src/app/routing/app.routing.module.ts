
import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list.component';
import { EmployeeListComponent } from './employee-list.component';
import { CustomerListComponent } from './customer-list.component';
import { DepartmentDetailComponent } from './department-details-component';

const routes: Routes = [{path : 'departments', component : DepartmentListComponent},
                        {path : 'employees', component : EmployeeListComponent},
                        {path : 'customers', component : CustomerListComponent},
                        {path : 'departments/:department_id', component : DepartmentDetailComponent}
                        
                    ]

@NgModule({
   imports : [RouterModule.forRoot(routes) ],
   exports: [RouterModule]    

})

export class AppRoutingModule{}

export const routingComponents = [DepartmentListComponent,EmployeeListComponent,CustomerListComponent]