
import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list.component';
import { EmployeeListComponent } from './employee-list.component';
import { CustomerListComponent } from './customer-list.component';
import { DepartmentDetailComponent } from './department-details-component';
import { PageNotFoundComponent } from './page.not.found.component';
import { ProductsComponent } from './products.component';
import { ProductComponent } from '../products/product.component';

const routes: Routes = [
                        {path : "",  redirectTo : "/customers" , pathMatch:"full"},
                        {path : 'departments', component : DepartmentListComponent},
                        {path : 'employees', component : EmployeeListComponent},
                        {path : 'customers', component : CustomerListComponent},
                        {path : 'products', component : ProductsComponent},
                        {path : 'departments/:department_id', component : DepartmentDetailComponent},
                        { path : "**",  component : PageNotFoundComponent }                 
                    ]

@NgModule({
   imports : [RouterModule.forRoot(routes) ],
   exports: [RouterModule]    

})

export class AppRoutingModule{}

export const routingComponents = [DepartmentListComponent,EmployeeListComponent,CustomerListComponent,ProductsComponent,DepartmentDetailComponent]