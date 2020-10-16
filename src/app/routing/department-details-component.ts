import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector : '',
    template: '<h1>Department Details for department {{department_id}}</h1>'

})

export class DepartmentDetailComponent implements OnInit{
    department_id : number
    constructor(private _activatedRouter: ActivatedRoute){

    }
   ngOnInit(){
       console.log("Dept detail init")
        this.department_id = this._activatedRouter.snapshot.params['department_id']
   }
}