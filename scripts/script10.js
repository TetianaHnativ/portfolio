/* ------------------------------ Task 1 ------------------------------ */
var task1Result = document.getElementById("task-1-result");
function addToList(list, myFun, data) {
    var item = document.createElement("li");
    item.textContent = myFun(data).toString();
    list && list.appendChild(item);
}
function printPowsOf2(number) {
    if (typeof number !== "number")
        return "".concat(typeof number === "string" ? "\"".concat(number, "\"") : number, " - incorrect type");
    var resultText = "".concat(number, " - ");
    for (var i = 1; i <= number; i *= 2) {
        resultText += "".concat(i, ", ");
    }
    return resultText.slice(0, -2);
}
addToList(task1Result, printPowsOf2, "302");
addToList(task1Result, printPowsOf2, null);
addToList(task1Result, printPowsOf2, 128);
addToList(task1Result, printPowsOf2, 60);
/* ------------------------------ Task 2 ------------------------------ */
var task2Result = document.getElementById("task-2-result");
function calculateSumOfArray(initialArray) {
    var sum = 0;
    var resultText = initialArray.map(function (item) { return typeof item === "string" ? "\"".concat(item, "\"") : item === null ? "null" : item === undefined ? "undefined" : item; }).join(", ");
    sum = initialArray.reduce(function (acc, sum) { return acc + sum; }, 0);
    return "[".concat(resultText, "] - the sum is ").concat(sum);
}
addToList(task2Result, calculateSumOfArray, [3, 2, '2', null, 1.5, 9.5, undefined]);
addToList(task2Result, calculateSumOfArray, [null, undefined, '2']);
addToList(task2Result, calculateSumOfArray, [-9.5, 9.5, undefined, 1]);
/* ------------------------------ Task 3 ------------------------------ */
var task3Result = document.getElementById("task-3-result");
function printSeasonByMonth(month) {
    switch (month) {
        case "DECEMBER":
        case "JANUARY":
        case "FEBRUARY":
            return "".concat(month, " - winter");
        case "MARCH":
        case "APRIL":
        case "MAY":
            return "".concat(month, " - spring");
        case "JUNE":
        case "JULY":
        case "AUGUST":
            return "".concat(month, " - summer");
        case "SEPTEMBER":
        case "OCTOBER":
        case "NOVEMBER":
            return "".concat(month, " - autumn");
        default:
            return "This month is not exist";
    }
}
addToList(task3Result, printSeasonByMonth, "SEPTEMBER");
addToList(task3Result, printSeasonByMonth, "NOVEMBER");
addToList(task3Result, printSeasonByMonth, "JULY");
addToList(task3Result, printSeasonByMonth, "APRIL");
/* ------------------------------ Task 4 ------------------------------ */
var task4Result = document.getElementById("task-4-result");
function calculateWordsInString(str) {
    str = str.trim();
    if (str.length <= 0)
        return "A string must contain at least 1 word";
    var words = str.split(/\s+/);
    return "\"".concat(str, "\" - ").concat(words.length, " words");
}
addToList(task4Result, calculateWordsInString, "Easy string for count");
addToList(task4Result, calculateWordsInString, " Easy ");
addToList(task4Result, calculateWordsInString, " ");
addToList(task4Result, calculateWordsInString, "Some?  string, with a triple   space");
