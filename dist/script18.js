import { addToList } from './script.js';
/* Task 1  */
const catchErrors = (callback) => {
    try {
        callback();
    }
    catch (error) {
        console.error("Task 1 " + error);
    }
};
/* ------------------------------ Task 1 ------------------------------ */
const task_18_Result_1 = document.getElementById("task-1-result");
const global_variable = "my global variable";
const GlobalScope = () => console.log("Task 1. GlobalScope: " + global_variable);
GlobalScope();
const FunctionScope = () => {
    const function_variable = "my funcrion variable";
    console.log("Task 1. FunctionScope: " + function_variable);
};
FunctionScope();
//catchErrors(() => console.log("FunctionScope: " + function_variable)); // - ReferenceError
const BlockScope = () => {
    {
        const block_variable = "my block variable";
        console.log("Task 1. BlockScope: " + block_variable);
    }
    //catchErrors(() => console.log("BlockScope: " + block_variable)); // - ReferenceError
};
BlockScope();
addToList(task_18_Result_1, () => "GlobalScope: my global variable", null);
addToList(task_18_Result_1, () => "FunctionScope: my funcrion variable and ReferenceError: function_variable is not defined", null);
addToList(task_18_Result_1, () => "BlockScope: my block variable and ReferenceError: block_variable is not defined", null);
/* ------------------------------ Task 2 ------------------------------ */
const task_18_Result_2 = document.getElementById("task-2-result");
const car = {
    name: "Tesla",
    model: "X",
};
function showCarInfo() {
    return "Car name - " + this.name + ", car model - " + this.model;
}
const carInfo = showCarInfo.bind(car);
addToList(task_18_Result_2, carInfo, null);
/* ------------------------------ Task 3 ------------------------------ */
const task_18_Result_3 = document.getElementById("task-3-result");
const cat = {
    sound: 'meow',
    greet: function () {
        setTimeout(function () {
            const result = `The function works and produces: ${this.sound}`;
            addToList(task_18_Result_3, () => result, null);
        }.bind(this), 0);
    }
};
cat.greet();
/* ------------------------------ Task 4 ------------------------------ */
const task_18_Result_4 = document.getElementById("task-4-result");
const dog = {
    sound: 'bark',
    greet: function () {
        setTimeout(() => {
            addToList(task_18_Result_4, () => `The function works and produces: ${this.sound}`, null);
        });
    }
};
dog.greet();
/* ------------------------------ Task 5 ------------------------------ */
const task_18_Result_5 = document.getElementById("task-5-result");
let convert;
const convertFunction = function (bytes) {
    return `${bytes} bytes => ${(bytes / 1048576).toFixed(2).toString()} Mb`;
};
convert = convertFunction.call(null, 10000);
addToList(task_18_Result_5, () => convert, null);
addToList(task_18_Result_5, () => convertFunction(50000), null);
addToList(task_18_Result_5, () => convertFunction(1048576), null);
/* ------------------------------ Task 6 ------------------------------ */
const task_18_Result_6 = document.getElementById("task-6-result");
const Person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function () {
        const fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
};
const logPersonNameAndInterests = (...interestsArgs) => {
    return `[${interestsArgs}] -> ${Person.getFullName.call(Person)} loves: ${interestsArgs.toString()}`;
};
const testArgs1 = ['sushi', 'hiking'];
const testArgs2 = ['pizza', 'dancing', 'reading'];
addToList(task_18_Result_6, () => logPersonNameAndInterests(...testArgs1), null);
Person.lastName = "Linser";
Person.firstName = "Lusi";
addToList(task_18_Result_6, () => logPersonNameAndInterests(...testArgs2), null);
