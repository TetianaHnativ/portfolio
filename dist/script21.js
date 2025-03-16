import { addToList } from './script.js';
const task_21_Result_1 = document.getElementById("task-1-result");
const arr = ["CusTom", "Web", "aNd", "MoBile", "PlaTfoRms"];
const lowerCase = (testArray) => testArray.map(element => element.toLowerCase());
const capitalizeFirst = (testArray) => testArray.map(element => element[0].toUpperCase() + element.slice(1).toLowerCase());
const modifyArray = (modifyCondition) => (testArray) => modifyCondition(testArray); // modify array function
const compose = (...fns) => (arg) => fns.reduceRight((acc, fn) => fn(acc), arg); // compose function 
const allToLower = (testArray) => {
    const testString = compose(modifyArray(lowerCase))(testArray).join(" - ");
    return `Result: ${testString} length: ${testString.length}`;
};
const capitalizeAllFirst = (testArray) => {
    const testString = compose(modifyArray(capitalizeFirst))(testArray).join("-");
    return `Result: ${testString} length: ${testString.length}`;
};
addToList(task_21_Result_1, allToLower, arr);
addToList(task_21_Result_1, capitalizeAllFirst, arr);
