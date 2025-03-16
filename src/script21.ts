import { addToList } from './script.js';

const task_21_Result_1: HTMLElement | null = document.getElementById("task-1-result");

const arr = ["CusTom", "Web", "aNd", "MoBile", "PlaTfoRms"];

const lowerCase = (testArray: string[]): string[] => testArray.map(element => element.toLowerCase());

const capitalizeFirst = (testArray: string[]): string[] => testArray.map(element => element[0].toUpperCase() + element.slice(1).toLowerCase());

const modifyArray = (modifyCondition: Function) => (testArray: string[]): string[] => modifyCondition(testArray); // modify array function

const compose = <T>(...fns: Function[]) => (arg: T): any => fns.reduceRight((acc, fn) => fn(acc), arg); // compose function 

const allToLower = (testArray: string[]): string => {
    const testString = compose(modifyArray(lowerCase))(testArray).join(" - ");
    return `Result: ${testString} length: ${testString.length}`;
}; 

const capitalizeAllFirst = (testArray: string[]): string => {
    const testString = compose(modifyArray(capitalizeFirst))(testArray).join("-");
    return `Result: ${testString} length: ${testString.length}`;
}; 

addToList(task_21_Result_1, allToLower, arr);
addToList(task_21_Result_1, capitalizeAllFirst, arr);