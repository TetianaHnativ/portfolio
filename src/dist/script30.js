"use strict";
exports.__esModule = true;
var script_js_1 = require("./script.js");
var baseUrl = "https://jsonplaceholder.typicode.com";
function getData(url, options) {
    return fetch(url, options)
        .then(function (response) {
        if (!response.ok) {
            throw new Error("Connection failed with status code:" + response.status);
        }
        return response.json();
    })["catch"](function (error) {
        console.error("Fetch error from " + url + ": " + ((error instanceof Error) ? error.message : error));
        return null;
    });
}
/* ------------------------------ Task 1 ------------------------------ */
var task_30_Result_1 = document.getElementById("task-1-result");
getData(baseUrl + "/users").then(function (data) { return data && console.log("Task 1. Users:", data); });
/* ------------------------------ Task 2 ------------------------------ */
var task_30_Result_2 = document.getElementById("task-2-result");
function albumUser(userId) {
    getData(baseUrl + "/users/" + userId + "/albums").then(function (data) { return data && console.log("Task 2. Array of user albums with id " + userId + ":", data); });
}
albumUser(10);
/* ------------------------------ Task 3 ------------------------------ */
var task_30_Result_3 = document.getElementById("task-3-result");
var newUser = {
    name: "Name LastName",
    username: "UserName",
    email: "usermail@gmail.com"
};
getData(baseUrl + "/users", {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(newUser)
}).then(function (data) {
    return script_js_1.addToList(task_30_Result_3, function (data) { return "New user: { " + Object.entries(data)
        .map(function (_a) {
        var key = _a[0], value = _a[1];
        return key + ": " + (typeof value === 'string' ? "\"" + value + "\"" : value);
    })
        .join(', ') + " }"; }, data);
});
/* ------------------------------ Task 4 ------------------------------ */
var task_30_Result_4 = document.getElementById("task-4-result");
function getAlbum(id) {
    return getData(baseUrl + "/albums/" + id);
}
function getSpecifiedAlbums(ids) {
    if (ids === void 0) { ids = []; }
    var promises = ids.map(function (id) { return getAlbum(id); });
    return Promise.allSettled(promises)
        .then(function (results) { return results
        .filter(function (result) { return result.status === "fulfilled"; })
        .map(function (result) { return result.value; }); });
}
getSpecifiedAlbums([1, 15, 0])
    .then(function (results) {
    console.log("Task 4. Results: ", results);
});
script_js_1.taskResult(task_30_Result_1, task_30_Result_2, task_30_Result_4);
