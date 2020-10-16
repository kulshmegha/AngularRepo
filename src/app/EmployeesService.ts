
import { Injectable } from "@angular/core";
import { Employee } from './Employee';
import {HttpClient} from '@angular/common/http';
import { Users } from './Users';

@Injectable()

export class EmployeesService{
    _url = 'http://localhost:4200/assets/employee-data.json'
    _rest_url= 'https://jsonplaceholder.typicode.com/todos'
    constructor(private _httpClient:HttpClient){

    }
    getEmployees(){

        return this._httpClient.get<Employee[]>(this._url)
        // return [
        //     {   "employeeId" : 111,"name": "Megha", "salary": 2000   },
        //     {   "employeeId" : 222,"name": "Anu", "salary": 2500 },
        //     {  "employeeId" : 333,"name": "Anurag", "salary": 3500 }
        // ]
    }
    getToDos(){
        return this._httpClient.get<Users[]>(this._rest_url)
    }
}