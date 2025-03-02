"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var script_js_1 = require("./script.js");
function FnArrayResult(data, fun) {
    return "[" + data.join(", ") + "] => [" + fun(data).join(", ") + "]";
}
function FnObjectResult(data, fun) {
    return JSON.stringify(data) + " => " + JSON.stringify(fun(data));
}
/* ------------------------------ Task 1 ------------------------------ */
var task_14_Result_1 = document.getElementById("task-1-result");
function unicFn(initialArray) {
    return __spreadArrays(new Set(initialArray));
}
script_js_1.addToList(task_14_Result_1, function (data) { return FnArrayResult(data, unicFn); }, [2, 3, 1, 3, 3, 7]);
script_js_1.addToList(task_14_Result_1, function (data) { return FnArrayResult(data, unicFn); }, [2.2, 3, 1, 3.4, 3, 7]);
script_js_1.addToList(task_14_Result_1, function (data) { return FnArrayResult(data, unicFn); }, ["hi", "hello", "h", "hello", "hell", "hi"]);
/* ------------------------------ Task 2 ------------------------------ */
var task_14_Result_2 = document.getElementById("task-2-result");
function isEvenArray(initialArray) {
    return "[" + initialArray.join(", ") + "] - " + (initialArray.every(function (element) { return element % 2 === 0; }) ? "YES" : "NO");
}
script_js_1.addToList(task_14_Result_2, isEvenArray, [1, 2, 3, 9]);
script_js_1.addToList(task_14_Result_2, isEvenArray, [2, 4, 6]);
/* ------------------------------ Task 3 ------------------------------ */
var task_14_Result_3 = document.getElementById("task-3-result");
function filterArray(initialArray) {
    return initialArray.filter(function (element) { return typeof element === "string"; });
}
script_js_1.addToList(task_14_Result_3, function (data) { return FnArrayResult(data, filterArray); }, [2, "string", 3, , , "test"]);
script_js_1.addToList(task_14_Result_3, function (data) { return FnArrayResult(data, filterArray); }, [2, 4, 6]);
/* ------------------------------ Task 4 ------------------------------ */
var task_14_Result_4 = document.getElementById("task-4-result");
function findUser(initialObject) {
    return Object
        .keys(initialObject)
        .filter(function (key) { return initialObject[key].age > 18 && initialObject[key].city === "London"; });
}
script_js_1.addToList(task_14_Result_4, function (data) { return FnObjectResult(data, findUser); }, { Max: { age: 23, city: "London" }, Mike: { age: 20, city: "NY" } });
script_js_1.addToList(task_14_Result_4, function (data) { return FnObjectResult(data, findUser); }, { Mike: { age: 20, city: "NY" } });
script_js_1.addToList(task_14_Result_4, function (data) { return FnObjectResult(data, findUser); }, { Max: { age: 23, city: "London" }, Tina: { age: 20, city: "London" }, Tasha: { age: 18, city: "London" } });
/* ------------------------------ Task 5 ------------------------------ */
var task_14_Result_5 = document.getElementById("task-5-result");
function removeObj(arrayOfObj, keyName, value) {
    return arrayOfObj.filter(function (element) { return Object.entries(element)[0][0] !== keyName || Object.entries(element)[0][1] !== value; });
}
var arr = [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }];
script_js_1.addToList(task_14_Result_5, function (data) { return FnObjectResult(data, function (obj) { return removeObj(obj, "age", 2); }); }, [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }]);
script_js_1.addToList(task_14_Result_5, function (data) { return FnObjectResult(data, function (obj) { return removeObj(obj, "year", 2); }); }, [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }]);
