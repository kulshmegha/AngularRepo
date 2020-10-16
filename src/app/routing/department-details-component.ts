import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector : '',
    template: `<h1>Department Details for department {{department_id}}</h1>
               <button (click) = goPrevious()>Previous </button>
              <button (click) = goNext()>Next </button>`

})

export class DepartmentDetailComponent implements OnInit{
    department_id : number
    constructor(private _activatedRouter: ActivatedRoute,private _router:Router){

    }
   ngOnInit(){
       console.log("Dept detail init")
       // this.department_id = this._activatedRouter.snapshot.params['department_id']
       this._activatedRouter.params.subscribe((params: Params) =>{
            this.department_id = parseInt(params['department_id'])
       } )
   }

   goNext(){
       let dept_id =  this.department_id + 1;
       this._router.navigate(["departments",dept_id])
   }

   goPrevious(){
    let dept_id =  this.department_id - 1;
    this._router.navigate(["departments",dept_id])
  }
}