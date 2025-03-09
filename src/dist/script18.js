"use strict";
exports.__esModule = true;
var script_js_1 = require("./script.js");
/* Task 4  */
/* ------------------------------ Task 1 ------------------------------ */
var task_18_Result_1 = document.getElementById("task-1-result");
var global_variable = "my global variable";
var GlobalScope = function () { return console.log("Task 1. GlobalScope: " + global_variable); };
GlobalScope();
var catchErrors = function (callback) {
    try {
        callback();
    }
    catch (error) {
        console.error("Task 1 " + error);
    }
};
var FunctionScope = function () {
    var function_variable = "my funcrion variable";
    console.log("Task 1. FunctionScope: " + function_variable);
};
FunctionScope();
catchErrors(function () { return console.log("FunctionScope: " + function_variable); });
var BlockScope = function () {
    {
        var block_variable = "my block variable";
        console.log("Task 1. BlockScope: " + block_variable);
    }
    catchErrors(function () { return console.log("BlockScope: " + block_variable); });
};
BlockScope();
script_js_1.addToList(task_18_Result_1, function () { return "GlobalScope: my global variable"; }, null);
script_js_1.addToList(task_18_Result_1, function () { return "FunctionScope: my funcrion variable and ReferenceError: function_variable is not defined"; }, null);
script_js_1.addToList(task_18_Result_1, function () { return "BlockScope: my block variable and ReferenceError: block_variable is not defined"; }, null);
/* ------------------------------ Task 2 ------------------------------ */
var task_18_Result_2 = document.getElementById("task-2-result");
var car = {
    name: "Tesla",
    model: "X"
};
function showCarInfo() {
    return "Car name - " + this.name + ", car model - " + this.model;
}
var carInfo = showCarInfo.bind(car);
script_js_1.addToList(task_18_Result_2, carInfo, null);
/* ------------------------------ Task 3 ------------------------------ */
var task_18_Result_3 = document.getElementById("task-3-result");
var cat = {
    sound: 'meow',
    greet: function () {
        var _this = this;
        setTimeout(function () { return console.log("Task 3. The function works and outputs: " + _this.sound); }, 0);
    }
};
cat.greet();
script_js_1.addToList(task_18_Result_3, function () { return "Look in the console: the function works and outputs: 'meow'"; }, null);
/* ------------------------------ Task 4 ------------------------------ */
var task_18_Result_4 = document.getElementById("task-4-result");
var dog = {
    sound: 'bark',
    greet: function () {
        var _this = this;
        setTimeout(function () { return console.log("Task 4. The function works and outputs: " + _this.sound); }, 0);
    }
};
dog.greet();
script_js_1.addToList(task_18_Result_3, function () { return "Look in the console: the function works and outputs: '" + dog.greet() + "'"; }, null);
/* ------------------------------ Task 5 ------------------------------ */
var task_18_Result_5 = document.getElementById("task-5-result");
/* ------------------------------ Task 6 ------------------------------ */
var task_18_Result_6 = document.getElementById("task-6-result");
