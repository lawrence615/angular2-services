import {Component} from 'angular2/core';
import {LoggingService} from "./services/logging.service";
import {CalculatorService} from "./services/calculator.service";
import {DataService} from "./services/data.service";

@Component({
    selector: 'component-1',
    template: `
        <div>
            <h3>Logging Service</h3>
            <input type="text" #message>
            <button (click)="onLog(message.value)">Send</button>
        </div>
        <div>
            <h3>Caluculator Service</h3>
            <p>Add or Multiply these two numbers:</p>
            <input type="text" #num1>
            <input type="text" #num2>
            <button (click)="onMultiply(num1.value, num2.value)">Multiply</button>
            <button (click) ="onAdd(num1.value, num2.value)">Add</button>
            <br>
            <p>Result: {{result}}</p>
        </div>
        <div>
            <h3>Data Service</h3>
            <button (click)="onGetData()">Get Data</button>
            <p>Data:  {{data}}</p>
            <input type="text" #newValue>
            <button (click)="onInsertData(newValue.value)">Insert data</button>
        </div>
    `,
    providers: [LoggingService, CalculatorService, DataService]
})

export class Component1Component {


    result:string;
    data:string;

    constructor(private _loggingService:LoggingService, private _calculatorService:CalculatorService, private _dataService:DataService) {

    }

    onLog(message:string) {
        this._loggingService.log(message);
    }

    /**
     * We convert the result from the service into a string by appending the empty string at the begging
     *
     * Our arguments are string but by adding a plus sign, we convert them to numbers
     *
     * @param num1
     * @param num2
     */
    onAdd(num1:string, num2:string) {
        this.result = '' + this._calculatorService.add(+num1, +num2);
    }

    onMultiply(num1:string, num2:string) {
        this.result = '' + this._calculatorService.multiply(+num1, +num2);
    }

    onGetData() {
        this.data = this._dataService.getRandomString();
    }

    onInsertData(value:string) {
        this._dataService.insert(value);
    }
}