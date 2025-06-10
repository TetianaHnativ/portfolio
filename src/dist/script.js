"use strict";
exports.__esModule = true;
exports.addToList = exports.taskResult = void 0;
function addToList(list, myFun, data) {
    var item = document.createElement("li");
    item.textContent = myFun(data).toString();
    list && list.appendChild(item);
}
exports.addToList = addToList;
function taskResult() {
    var tasks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        tasks[_i] = arguments[_i];
    }
    tasks.forEach(function (task) {
        return task && addToList(task, function () { return "Dear user, please, look in the console"; }, null);
    });
}
exports.taskResult = taskResult;
