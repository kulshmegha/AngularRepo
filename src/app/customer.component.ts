import {Component}  from '@angular/core'

@Component({
    selector : 'cust-app',
    template : `<h1>Customer Component</h1> <br/>
                Message :{{message}} <br/>
               
                <img [src] = "imageLink" /> <br/>
                Enter Message: <input type = "text" #messagetext/><br>
                <button (click) = "changeMessage(messagetext.value)">Go</button><br/>
                <button (click) = "showHideCalculator()">
                    {{calculatorStatus===true?"Hide Calculator":"Show Calculator"  }} 
                
                </button><br/><br/>
                
                <div *ngIf =  "calculatorStatus" >
                <h1>Calculator</h1>
                Enter number 1: <input type = "text" #number1/><br/>
                Enter number 2: <input type = "text" #number2/><br/>
                <button (click) = "sum(number1.value, number2.value)">Sum</button><br>
                Output is : <label >{{twonumsum}} </label><br>
                Number1 : {{number11}}
                Enter number 1: <input type = "text" name= "number11" [(ngModel)] = "number11" /><br/>
                Enter number 2: <input type = "text" name= "number22" [(ngModel)] = "number22"/><br/>
                <button (click) = "multiply()">Multiply</button><br>
                Output is : <label >{{multiplied}} </label>
                </div><br>
                <div [ngSwitch]="color" >
                  <p *ngSwitchCase = "'red'"> text is red</p>
                  <p *ngSwitchCase = "'blue'"> text is blue</p>
                  <p *ngSwitchDefault > Invalid color</p>
                </div><br><hr/>
                Enter Department : <input type="text" #department/>
                <button (click)="addDept(department.value)">Add Department</button>
               

                <ul>
                    <li *ngFor = "let dept of departments; let i = index">
                        {{dept}} -  <button (click)="deleteDept(i)">Delete Department</button>
                    </li>
                </ul>
                <br>
                <h4>NgStyle</h4>
                <ul *ngFor="let person of people">
                        <li [ngStyle]="{'color':getColor(person.country)}"> {{ person.name }} ({{ person.country }})
                        </li>
                </ul>
                `

})

export class CustomerComponent{
    message = "This is the cust message"
    imageLink = "https://picsum.photos/200/300"
    twonumsum :number
    number11: "10"
    number22: "20"
    multiplied:number
    calculatorStatus = false
    departments = ['HR','Finance','IT','Engineering','Manufacturing','Admin','Embedded']
    // showText = "Show Calculator"
    color = "red"
    constructor(){
        console.log("In customer")
    }



    addDept(data){
        this.departments.push(data)
    }

    deleteDept(dataIndex){
        this.departments.splice(dataIndex,1)
    }
    changeMessage(data){
        console.log(data)
        this.message = data
    }
    sum(num1, num2){
        this.twonumsum =  parseInt(num1)+ parseInt(num2) 
    }
    multiply(){
        this.multiplied =  parseInt(this.number11) * parseInt(this.number22) 
    }

    showHideCalculator(){
        if(this.calculatorStatus===false){
            this.calculatorStatus = true
            // this.showText = "Hide Calculator"
        }else{
            this.calculatorStatus = false
            // this.showText = "Show Calculator"
        }
    }
    getColor(country) {
        switch (country) {
            case 'UK':
                return 'green';
            case 'USA':
                return 'blue';
            case 'IN':
                return 'red';
        }
    }

    people: any[] = [
        {
            "name": "Tufail Ahmed",
            "country": 'IN'
        },
        {
            "name": "Neha Sharma",
            "country": 'UK'
        },
        {
            "name": "Ravi Kiran",
            "country": 'IN'
        },
        {
            "name": "Tarun Sharma",
            "country": 'IN'
        },
        {
            "name": "Cook Tyson",
            "country": 'USA'
        }
    ];

}