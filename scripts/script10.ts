/* ------------------------------ Task 1 ------------------------------ */

const task1Result: HTMLElement | null = document.getElementById("task-1-result");

function addToList(list: HTMLElement | null, myFun: (data: any) => string, data: any) {
    const item = document.createElement("li");
    item.textContent = myFun(data).toString();
    list && list.appendChild(item);
}

function printPowsOf2(number: any): string {
    if (typeof number !== "number") return `${typeof number === "string" ? `"${number}"` : number} - incorrect type`;
    let resultText: string = `${number} - `;
    for (let i: number = 1; i <= number; i *= 2) {
        resultText += `${i}, `;
    }
    return resultText.slice(0, -2);
}

addToList(task1Result, printPowsOf2, "302");
addToList(task1Result, printPowsOf2, null);
addToList(task1Result, printPowsOf2, 128);
addToList(task1Result, printPowsOf2, 60);

/* ------------------------------ Task 2 ------------------------------ */

const task2Result: HTMLElement | null = document.getElementById("task-2-result");

function calculateSumOfArray(initialArray: any): string {
    let sum: number = 0;
    let resultText: string = initialArray.map((item: any) => typeof item === "string" ? `"${item}"` : item === null ? "null" : item === undefined ? "undefined" : item).join(", ");
    sum = initialArray.reduce((acc: number, sum: number) => acc + sum, 0);
    return `[${resultText}] - the sum is ${sum}`;
}


addToList(task2Result, calculateSumOfArray, [3, 2, '2', null, 1.5, 9.5, undefined]);
addToList(task2Result, calculateSumOfArray, [null, undefined, '2']);
addToList(task2Result, calculateSumOfArray, [-9.5, 9.5, undefined, 1]);


/* ------------------------------ Task 3 ------------------------------ */

const task3Result: HTMLElement | null = document.getElementById("task-3-result");

function printSeasonByMonth(month: string): string {
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

addToList(task3Result, printSeasonByMonth, "SEPTEMBER");
addToList(task3Result, printSeasonByMonth, "NOVEMBER");
addToList(task3Result, printSeasonByMonth, "JULY");
addToList(task3Result, printSeasonByMonth, "APRIL");

/* ------------------------------ Task 4 ------------------------------ */

const task4Result: HTMLElement | null = document.getElementById("task-4-result");

function calculateWordsInString(str: string): string {
    str = str.trim();
    if (str.length <= 0) return `A string must contain at least 1 word`;
    const words = str.split(/\s+/);
    return `"${str}" - ${words.length} words`;
}

addToList(task4Result, calculateWordsInString, "Easy string for count");
addToList(task4Result, calculateWordsInString, " Easy ");
addToList(task4Result, calculateWordsInString, " ");
addToList(task4Result, calculateWordsInString, "Some?  string, with a triple   space");