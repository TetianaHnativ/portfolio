import { addToList } from './script.js';

/* Task 4  */

type Human = {
    age: number;
    city: string;
};

type User = {
    [name: string]: Human;
}

/* Task 5  */

type Obj = {
    [keyName: string]: number;
}

/* Task 1, 3  */

function FnArrayResult(data: any[], fun: (data: any[]) => any[]): string {
    return `[${data.join(", ")}] => [${fun(data).join(", ")}]`;
}

/* Task 4, 5  */

function FnObjectResult(data: any, fun: (data: any) => any): string {
    return `${JSON.stringify(data)} => ${JSON.stringify(fun(data))}`;
}

/* ------------------------------ Task 1 ------------------------------ */

const task_14_Result_1: HTMLElement | null = document.getElementById("task-1-result");

function unicFn(initialArray: Array<number | string>): Array<number | string> {
    return [...new Set(initialArray)];
}

addToList(task_14_Result_1, (data) => FnArrayResult(data, unicFn), [2, 3, 1, 3, 3, 7]);
addToList(task_14_Result_1, (data) => FnArrayResult(data, unicFn), [2.2, 3, 1, 3.4, 3, 7]);
addToList(task_14_Result_1, (data) => FnArrayResult(data, unicFn), ["hi", "hello", "h", "hello", "hell", "hi"]);

/* ------------------------------ Task 2 ------------------------------ */

const task_14_Result_2: HTMLElement | null = document.getElementById("task-2-result");

function isEvenArray(initialArray: number[]) {
    return `[${initialArray.join(", ")}] - ${initialArray.every((element: number) => element % 2 === 0) ? "YES" : "NO"}`;
}

addToList(task_14_Result_2, isEvenArray, [1, 2, 3, 9]);
addToList(task_14_Result_2, isEvenArray, [2, 4, 6]);

/* ------------------------------ Task 3 ------------------------------ */

const task_14_Result_3: HTMLElement | null = document.getElementById("task-3-result");

function filterArray(initialArray: any[]): string[] {
    return initialArray.filter((element) => typeof element === "string");
}

addToList(task_14_Result_3, (data) => FnArrayResult(data, filterArray), [2, "string", 3, , , "test"]);
addToList(task_14_Result_3, (data) => FnArrayResult(data, filterArray), [2, 4, 6]);

/* ------------------------------ Task 4 ------------------------------ */

const task_14_Result_4: HTMLElement | null = document.getElementById("task-4-result");

function findUser(initialObject: User): string[] {
    return Object
        .keys(initialObject)
        .filter((key: string) => initialObject[key].age > 18 && initialObject[key].city === "London");
}

addToList(task_14_Result_4, (data) => FnObjectResult(data, findUser), { Max: { age: 23, city: "London" }, Mike: { age: 20, city: "NY" } });
addToList(task_14_Result_4, (data) => FnObjectResult(data, findUser), { Mike: { age: 20, city: "NY" } });
addToList(task_14_Result_4, (data) => FnObjectResult(data, findUser), { Max: { age: 23, city: "London" }, Tina: { age: 20, city: "London" }, Tasha: { age: 18, city: "London" } });

/* ------------------------------ Task 5 ------------------------------ */

const task_14_Result_5: HTMLElement | null = document.getElementById("task-5-result");

function removeObj(arrayOfObj: Obj[], keyName: string, value: number): Obj[] {
    return arrayOfObj.filter((element: Obj) => Object.entries(element)[0][0] !== keyName || Object.entries(element)[0][1] !== value);
}

const arr: Obj[] = [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }];

addToList(task_14_Result_5, (data) => FnObjectResult(data, (obj) => removeObj(obj, "age", 2)), [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }]);
addToList(task_14_Result_5, (data) => FnObjectResult(data, (obj) => removeObj(obj, "year", 2)), [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }]);