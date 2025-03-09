"use strict";
exports.__esModule = true;
exports.addToList = void 0;
function addToList(list, myFun, data) {
    var item = document.createElement("li");
    item.textContent = myFun(data).toString();
    list && list.appendChild(item);
}
exports.addToList = addToList;
