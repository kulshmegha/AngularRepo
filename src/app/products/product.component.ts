import {Component, OnInit} from '@angular/core'

@Component({
    selector:'prod-app',
    templateUrl:'product.component.html',
    styleUrls:['product.component.css']
})

export class ProductComponent implements OnInit{
    constructor(){
        console.log("In Product")
    }
    ngOnInit() {
        // ...
      }

}