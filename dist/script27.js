import { addToList } from './script.js';
/* ------------------------------ Task 1 ------------------------------ */
const task_27_Result_1 = document.getElementById("task-1-result");
function isString(callback, myString) {
    if (typeof callback === "function" && typeof myString === "string") {
        callback(myString);
    }
    else {
        console.error("The passed value is not a string or the callback is not a function");
    }
}
const myCallback = (value) => value;
addToList(task_27_Result_1, () => "Dear user, check console too, please", null);
isString((data) => addToList(task_27_Result_1, myCallback, data), "It is my callback function");
isString((data) => addToList(task_27_Result_1, myCallback, data), 123);
/* ------------------------------ Task 2 ------------------------------ */
const task_27_Result_2 = document.getElementById("task-2-result");
const clock = () => setInterval(() => addToList(task_27_Result_2, () => {
    const date = new Date();
    return date.toLocaleTimeString("uk-UA");
}, null), 1000);
const intervalClockID = clock();
setTimeout(() => clearInterval(intervalClockID), 5000);
/* ------------------------------ Task 3 ------------------------------ */
const task_27_Result_3 = document.getElementById("task-3-result");
const timer = (s) => {
    const intervalTimerID = setInterval(() => {
        addToList(task_27_Result_3, () => `Timer: ${s}`, null);
        s--;
        if (s < 0) {
            clearInterval(intervalTimerID);
            addToList(task_27_Result_3, () => "Time's up! ⏳", null);
        }
    }, 1000);
};
timer(5);
/* ------------------------------ Task 4 ------------------------------ */
const task_27_Result_4 = document.getElementById("task-4-result");
class Person {
    constructor(name) {
        this._id = "_" + Math.random().toString().slice(2, 8);
        this._name = name;
        this.nameNull = setTimeout(() => {
            this._name = null;
            addToList(task_27_Result_4, () => `After 5 second name user with id ${this._id} is ${this.name}`, null);
        }, 5000);
    }
    set id(value) {
        this._id = value;
    }
    get id() {
        return this._id;
    }
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
    CancelNameNull() {
        clearTimeout(this.nameNull);
        addToList(task_27_Result_4, () => this.userData() + " (still)", null);
    }
    userData() {
        return `Name user with id ${this._id} is ${this.name}`;
    }
}
const person1 = new Person("Oleg");
person1.CancelNameNull();
const person2 = new Person("Anna");
addToList(task_27_Result_4, () => person1.userData(), null);
addToList(task_27_Result_4, () => person2.userData(), null);
