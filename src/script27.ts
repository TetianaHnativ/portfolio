import { addToList } from './script.js';

/* Task 4 */

interface IPerson {
    id: string,
    name: string | null,
    CancelNameNull(): void,
    userData(): string
}


/* ------------------------------ Task 1 ------------------------------ */

const task_27_Result_1: HTMLElement | null = document.getElementById("task-1-result");

function isString(callback: Function, myString: any): void {
    if (typeof callback === "function" && typeof myString === "string") {
        callback(myString);
    } else {
        console.error("The passed value is not a string or the callback is not a function");
    }
}

const myCallback = (value: string): string => value;

addToList(task_27_Result_1, (): string => "Dear user, check console too, please", null);
isString((data: any) => addToList(task_27_Result_1, myCallback, data), "It is my callback function");
isString((data: any) => addToList(task_27_Result_1, myCallback, data), 123);

/* ------------------------------ Task 2 ------------------------------ */

const task_27_Result_2: HTMLElement | null = document.getElementById("task-2-result");

const clock = () => setInterval(() => addToList(task_27_Result_2,
    (): string => {
        const date: Date = new Date();
        return date.toLocaleTimeString("uk-UA");
    }, null), 1000);

const intervalClockID = clock();

setTimeout(() => clearInterval(intervalClockID), 5000);

/* ------------------------------ Task 3 ------------------------------ */

const task_27_Result_3: HTMLElement | null = document.getElementById("task-3-result");

const timer = (s: number): void => {
    const intervalTimerID = setInterval(() => {
        addToList(task_27_Result_3, (): string => `Timer: ${s}`, null);
        s--;

        if (s < 0) {
            clearInterval(intervalTimerID);
            addToList(task_27_Result_3, (): string => "Time's up! ⏳", null);
        }
    }, 1000)
}

timer(5);
/* ------------------------------ Task 4 ------------------------------ */

const task_27_Result_4: HTMLElement | null = document.getElementById("task-4-result");

class Person implements IPerson {
    private _id: string;
    private _name: string | null;
    private nameNull: ReturnType<typeof setTimeout> | number;

    public constructor(name: string) {
        this._id = "_" + Math.random().toString().slice(2, 8);
        this._name = name;
        this.nameNull = setTimeout(() => {
            this._name = null;
            addToList(task_27_Result_4, (): string => `After 5 second name user with id ${this._id} is ${this.name}`, null);
        }, 5000);
    }

    public set id(value: string) {
        this._id = value;
    }

    public get id(): string {
        return this._id;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get name(): string | null {
        return this._name;
    }

    public CancelNameNull(): void {
        clearTimeout(this.nameNull);
        addToList(task_27_Result_4, (): string => this.userData() + " (still)", null);
    }

    public userData(): string {
        return `Name user with id ${this._id} is ${this.name}`;
    }
}

const person1 = new Person("Oleg");
person1.CancelNameNull();

const person2 = new Person("Anna");

addToList(task_27_Result_4, (): string => person1.userData(), null);
addToList(task_27_Result_4, (): string => person2.userData(), null);
