import { addToList } from './script.js';

/* Task 2  */

type Car = {
    name: string;
    model: string;
};

/* Task 3, 4  */

type Animal = {
    sound: string,
    greet: () => void,
}

/* Task 6  */

type PersonType = {
    firstName: string,
    lastName: string,
    getFullName: () => string,
};

/* Task 1  */

const catchErrors = (callback: Function): void => {
    try {
        callback()
    } catch (error) {
        console.error("Task 1 " + error);
    }
}

/* ------------------------------ Task 1 ------------------------------ */

const task_18_Result_1: HTMLElement | null = document.getElementById("task-1-result");

const global_variable: string = "my global variable";

const GlobalScope = (): void => console.log("Task 1. GlobalScope: " + global_variable);

GlobalScope();

const FunctionScope = (): void => {
    const function_variable: string = "my funcrion variable";
    console.log("Task 1. FunctionScope: " + function_variable);
}

FunctionScope();
//catchErrors(() => console.log("FunctionScope: " + function_variable)); // - ReferenceError

const BlockScope = (): void => {
    {
        const block_variable: string = "my block variable";
        console.log("Task 1. BlockScope: " + block_variable);
    }
    //catchErrors(() => console.log("BlockScope: " + block_variable)); // - ReferenceError
}

BlockScope();

addToList(task_18_Result_1, (): string => "GlobalScope: my global variable", null);
addToList(task_18_Result_1, (): string => "FunctionScope: my funcrion variable and ReferenceError: function_variable is not defined", null);
addToList(task_18_Result_1, (): string => "BlockScope: my block variable and ReferenceError: block_variable is not defined", null);

/* ------------------------------ Task 2 ------------------------------ */

const task_18_Result_2: HTMLElement | null = document.getElementById("task-2-result");

const car: Car = {
    name: "Tesla",
    model: "X",
};

function showCarInfo(this: { name: string; model: string }): string {
    return "Car name - " + this.name + ", car model - " + this.model
}

const carInfo: () => string = showCarInfo.bind(car);


addToList(task_18_Result_2, carInfo, null);

/* ------------------------------ Task 3 ------------------------------ */

const task_18_Result_3: HTMLElement | null = document.getElementById("task-3-result");

const cat: Animal = {
    sound: 'meow',
    greet: function () {
        setTimeout(function (this: Animal) {
            const result = `The function works and produces: ${this.sound}`;
            addToList(task_18_Result_3, () => result, null);
        }.bind(this), 0)
    }
};

cat.greet();

/* ------------------------------ Task 4 ------------------------------ */

const task_18_Result_4: HTMLElement | null = document.getElementById("task-4-result");

const dog: Animal = {
    sound: 'bark',
    greet: function () {
        setTimeout(() => {
            addToList(task_18_Result_4, () => `The function works and produces: ${this.sound}`, null);
        });
    }
}

dog.greet();

/* ------------------------------ Task 5 ------------------------------ */

const task_18_Result_5: HTMLElement | null = document.getElementById("task-5-result");

let convert: string;

const convertFunction = function (bytes: number): string {
    return `${bytes} bytes => ${(bytes / 1048576).toFixed(2).toString()} Mb`;
}

convert = convertFunction.call(null, 10000);

addToList(task_18_Result_5, () => convert, null);
addToList(task_18_Result_5, () => convertFunction(50000), null);
addToList(task_18_Result_5, () => convertFunction(1048576), null);

/* ------------------------------ Task 6 ------------------------------ */

const task_18_Result_6: HTMLElement | null = document.getElementById("task-6-result");

const Person: PersonType = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function () {
        const fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
};

const logPersonNameAndInterests = (...interestsArgs: string[]): string => {
    return `[${interestsArgs}] -> ${Person.getFullName.call(Person)} loves: ${interestsArgs.toString()}`;
}

const testArgs1: string[] = ['sushi', 'hiking'];
const testArgs2: string[] = ['pizza', 'dancing', 'reading'];

addToList(task_18_Result_6, () => logPersonNameAndInterests(...testArgs1), null);
Person.lastName = "Linser";
Person.firstName = "Lusi";
addToList(task_18_Result_6, () => logPersonNameAndInterests(...testArgs2), null);

