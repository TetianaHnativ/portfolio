import { addToList } from './script.js';

/* Task 1  */

interface ICalculator {
    a: number,
    b: number,
    sum(): number,
    subtract(): number
}

interface IAdvancedCalculator extends ICalculator {
    multiply(): number,
    divide(): number
}

/* ------------------------------ Task 1 ------------------------------ */

const task_24_Result_1: HTMLElement | null = document.getElementById("task-1-result");

function Calculator(this: ICalculator, a: number, b: number): void {
    this.a = a;
    this.b = b;
}

Calculator.prototype.result = function (operator: string, method: Function): string {
    return `${this.a} ${operator} ${this.b} = ${method}`;
}

Calculator.prototype.sum = function (): number {
    return this.a + this.b;
}

Calculator.prototype.subtract = function (): number {
    return this.a - this.b;
}

function AdvancedCalculator(this: IAdvancedCalculator, a: number, b: number): void {
    Calculator.call(this, a, b);
}

AdvancedCalculator.prototype = Object.create(Calculator.prototype);
AdvancedCalculator.prototype.constructor = AdvancedCalculator; // fix the constructor to point to AdvancedCalculator instead of Calculator

AdvancedCalculator.prototype.multiply = function (): number {
    return this.a * this.b;
}

AdvancedCalculator.prototype.divide = function (): number {
    if (this.b === 0) throw new Error(`${this.a} / ${this.b} - Cannot divide by zero`);
    return this.a / this.b;
}

const operations = new (AdvancedCalculator as any)(3, 6);

try {
    addToList(task_24_Result_1, () => operations.result("+", operations.sum.call(operations)), null);
    addToList(task_24_Result_1, () => operations.result("-", operations.subtract.call(operations)), null);
    addToList(task_24_Result_1, () => operations.result("*", operations.multiply.call(operations)), null);
    addToList(task_24_Result_1, () => operations.result("/", operations.divide.call(operations)), null);
} catch (error: any) {
    console.error(error.message);
}

/* ------------------------------ Task 2 ------------------------------ */

const task_24_Result_2: HTMLElement | null = document.getElementById("task-2-result");

function generateId() {
    return "_" + Math.random().toString(36).substr(2, 9);
}

interface ITodoItem {
    id: string;
    name: string;
    checked: boolean;
}

class TodoItem implements ITodoItem {
    private _id: string;
    private _name: string;
    private _checked: boolean;

    public constructor(name: string) {
        this._id = generateId();
        this._name = name;
        this._checked = false;
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

    public get name(): string {
        return this._name;
    }

    public set checked(value: boolean) {
        if (typeof value !== 'boolean') {
            throw new Error("The field 'checked' must have a boolean type");
        }
        this._checked = value;
    }

    public get checked(): boolean {
        return this._checked;
    }
}

interface ITodoList {
    id: string;
    name: string;
    items: TodoItem[];
    addItem(value: TodoItem): void;
    removeItemById(id: string): TodoItem[];
    getItemById(id: string): TodoItem | string;
}

class TodoList implements ITodoList {
    private _id: string;
    private _name: string;
    private _items: TodoItem[];

    public constructor(name: string) {
        this._id = generateId();
        this._name = name;
        this._items = [];
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

    public get name(): string {
        return this._name;
    }

    public get items(): TodoItem[] {
        return this._items;
    }

    public addItem(value: TodoItem) {
        if (value instanceof TodoItem) {
            this._items.push(value);
        } else {
            throw new Error("You can add to the list just elements with type TodoItem");
        }
    }

    public removeItemById(id: string): TodoItem[] {
        this._items = this._items.filter(element => element.id !== id);
        return this._items;
    }

    public getItemById(id: string): TodoItem | string {
        return this._items.find(element => element.id === id) || "There are no items with this id";
    }
}

const todoList = new TodoList("my list");
console.log(todoList);

const todoItem1 = new TodoItem("todoItem1");
const todoItem2 = new TodoItem("todoItem2");
const todoItem3 = new TodoItem("todoItem3");
const todoItem4 = new TodoItem("todoItem4");

todoList.addItem(todoItem1);
todoList.addItem(todoItem2);
todoList.addItem(todoItem3);
todoList.addItem(todoItem4);
console.log(todoList);

todoItem1.checked = true;
console.log(todoList);

todoList.removeItemById(todoItem3.id);
todoList.removeItemById(todoItem4.id);
console.log(todoList);