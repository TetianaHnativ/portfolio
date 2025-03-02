import { addToList } from './script.js';
/* ------------------------------ Task 1 ------------------------------ */
const task_10_Result_1 = document.getElementById("task-1-result");
function printPowsOf2(number) {
    if (typeof number !== "number")
        return `${typeof number === "string" ? `"${number}"` : number} - incorrect type`;
    let resultText = `${number} - `;
    for (let i = 1; i <= number; i *= 2) {
        resultText += `${i}, `;
    }
    return resultText.slice(0, -2);
}
addToList(task_10_Result_1, printPowsOf2, "302");
addToList(task_10_Result_1, printPowsOf2, null);
addToList(task_10_Result_1, printPowsOf2, 128);
addToList(task_10_Result_1, printPowsOf2, 60);
/* ------------------------------ Task 2 ------------------------------ */
const task_10_Result_2 = document.getElementById("task-2-result");
function calculateSumOfArray(initialArray) {
    let sum = 0;
    let resultText = initialArray
        .map((item) => typeof item === "string"
        ? `"${item}"` : item === null
        ? "null" : item === undefined
        ? "undefined" : item)
        .join(", ");
    sum = initialArray.reduce((acc, element) => {
        if (typeof element === "number") {
            return acc + element;
        }
        ;
        return acc;
    }, 0);
    return `[${resultText}] - the sum is ${sum}`;
}
addToList(task_10_Result_2, calculateSumOfArray, [3, 2, '2', null, 1.5, 9.5, undefined]);
addToList(task_10_Result_2, calculateSumOfArray, [null, undefined, '2']);
addToList(task_10_Result_2, calculateSumOfArray, [-9.5, 9.5, undefined, 1]);
/* ------------------------------ Task 3 ------------------------------ */
const task_10_Result_3 = document.getElementById("task-3-result");
function printSeasonByMonth(month) {
    switch (month) {
        case "DECEMBER":
        case "JANUARY":
        case "FEBRUARY":
            return `${month} - winter`;
        case "MARCH":
        case "APRIL":
        case "MAY":
            return `${month} - spring`;
        case "JUNE":
        case "JULY":
        case "AUGUST":
            return `${month} - summer`;
        case "SEPTEMBER":
        case "OCTOBER":
        case "NOVEMBER":
            return `${month} - autumn`;
        default:
            return "This month is not exist";
    }
}
addToList(task_10_Result_3, printSeasonByMonth, "SEPTEMBER");
addToList(task_10_Result_3, printSeasonByMonth, "NOVEMBER");
addToList(task_10_Result_3, printSeasonByMonth, "JULY");
addToList(task_10_Result_3, printSeasonByMonth, "APRIL");
/* ------------------------------ Task 4 ------------------------------ */
const task_10_Result_4 = document.getElementById("task-4-result");
function calculateWordsInString(str) {
    str = str.trim();
    if (str.length <= 0)
        return `A string must contain at least 1 word`;
    const words = str.split(/\s+/);
    return `"${str}" - ${words.length} words`;
}
addToList(task_10_Result_4, calculateWordsInString, "Easy string for count");
addToList(task_10_Result_4, calculateWordsInString, " Easy ");
addToList(task_10_Result_4, calculateWordsInString, " ");
addToList(task_10_Result_4, calculateWordsInString, "Some?  string, with a triple   space");
