import { addToList } from './script.js';
/* ------------------------------ Task 1 ------------------------------ */
const task_24_Result_1 = document.getElementById("task-1-result");
function Calculator(a, b) {
    this.a = a;
    this.b = b;
}
Calculator.prototype.result = function (operator, method) {
    return `${this.a} ${operator} ${this.b} = ${method}`;
};
Calculator.prototype.sum = function () {
    return this.a + this.b;
};
Calculator.prototype.subtract = function () {
    return this.a - this.b;
};
function AdvancedCalculator(a, b) {
    Calculator.call(this, a, b);
}
AdvancedCalculator.prototype = Object.create(Calculator.prototype);
AdvancedCalculator.prototype.constructor = AdvancedCalculator; // fix the constructor to point to AdvancedCalculator instead of Calculator
AdvancedCalculator.prototype.multiply = function () {
    return this.a * this.b;
};
AdvancedCalculator.prototype.divide = function () {
    if (this.b === 0)
        throw new Error(`${this.a} / ${this.b} - Cannot divide by zero`);
    return this.a / this.b;
};
const operations = new AdvancedCalculator(3, 6);
try {
    addToList(task_24_Result_1, () => operations.result("+", operations.sum.call(operations)), null);
    addToList(task_24_Result_1, () => operations.result("-", operations.subtract.call(operations)), null);
    addToList(task_24_Result_1, () => operations.result("*", operations.multiply.call(operations)), null);
    addToList(task_24_Result_1, () => operations.result("/", operations.divide.call(operations)), null);
}
catch (error) {
    console.error(error.message);
}
/* ------------------------------ Task 2 ------------------------------ */
const task_24_Result_2 = document.getElementById("task-2-result");
function generateId() {
    return "_" + Math.random().toString(36).substr(2, 9);
}
class TodoItem {
    constructor(name) {
        this._id = generateId();
        this._name = name;
        this._checked = false;
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
    set checked(value) {
        if (typeof value !== 'boolean') {
            throw new Error("The field 'checked' must have a boolean type");
        }
        this._checked = value;
    }
    get checked() {
        return this._checked;
    }
}
class TodoList {
    constructor(name) {
        this._id = generateId();
        this._name = name;
        this._items = [];
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
    get items() {
        return this._items;
    }
    addItem(value) {
        if (value instanceof TodoItem) {
            this._items.push(value);
        }
        else {
            throw new Error("You can add to the list just elements with type TodoItem");
        }
    }
    removeItemById(id) {
        this._items = this._items.filter(element => element.id !== id);
        return this._items;
    }
    getItemById(id) {
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
