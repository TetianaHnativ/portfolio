"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var script_js_1 = require("./script.js");
var rootUrl = 'https://swapi.py4e.com/api/';
function fetchFunction(url) {
    return __awaiter(this, void 0, Promise, function () {
        var response, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Failed with status code: " + response.status);
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = (_a.sent());
                    return [2 /*return*/, result];
                case 3:
                    error_1 = _a.sent();
                    console.error(url, error_1);
                    return [2 /*return*/, undefined];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function fetchData(url, message) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fetchFunction(url)];
                case 1:
                    data = _b.sent();
                    data && console.log(message, (_a = data === null || data === void 0 ? void 0 : data.results) !== null && _a !== void 0 ? _a : data);
                    return [2 /*return*/];
            }
        });
    });
}
/* ------------------------------ Task 1 ------------------------------ */
var task_33_Result_1 = document.getElementById("task-1-result");
fetchData('https://jsonplaceholder.typicode.com/users/1/albums', "Task 1. Result (albums): ");
/* ------------------------------ Task 2 ------------------------------ */
var task_33_Result_2 = document.getElementById("task-2-result");
fetchData(rootUrl + "planets/", "Task 2. Result (planets): ");
/* ------------------------------ Task 3 ------------------------------ */
var task_33_Result_3 = document.getElementById("task-3-result");
function getByName(name) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            fetchData(rootUrl + "people/?search=" + name, "Task 3. Result (people with surname " + name + "): ");
            return [2 /*return*/];
        });
    });
}
getByName("Skywalker");
/* ------------------------------ Task 4 ------------------------------ */
var task_33_Result_4 = document.getElementById("task-4-result");
function fetchSWAPI(resource, throwError) {
    var _a;
    if (throwError === void 0) { throwError = false; }
    return __awaiter(this, void 0, Promise, function () {
        var theURL;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    theURL = (_a = (resource.includes(rootUrl) ? resource : rootUrl + resource)) !== null && _a !== void 0 ? _a : "";
                    if (throwError)
                        throw new Error(resource + " - Request is failed");
                    return [4 /*yield*/, fetchFunction(theURL)];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
}
function testFetchSWAPI() {
    return __awaiter(this, void 0, void 0, function () {
        var person, film, film1001Id, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, fetchSWAPI("people/1/")];
                case 1:
                    person = _a.sent();
                    console.log("Task 4: ", "person ", person);
                    return [4 /*yield*/, fetchSWAPI("https://swapi.py4e.com/api/films/1/")];
                case 2:
                    film = _a.sent();
                    console.log("Task 4: ", "film ", film);
                    return [4 /*yield*/, fetchSWAPI("films/1001/")];
                case 3:
                    film1001Id = _a.sent();
                    console.log("Task 4: ", "film1001Id ", film1001Id);
                    // should throw error
                    return [4 /*yield*/, fetchSWAPI("films/1101/", true)];
                case 4:
                    // should throw error
                    _a.sent();
                    return [3 /*break*/, 6];
                case 5:
                    error_2 = _a.sent();
                    console.error("Task 4: ", "testFetchSWAPI error ", error_2);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
testFetchSWAPI();
/* ------------------------------ Task 5 ------------------------------ */
var task_33_Result_5 = document.getElementById("task-5-result");
function getPersonFilms(name) {
    var _a, _b;
    return __awaiter(this, void 0, Promise, function () {
        var data, person, allFilms, filteredFilms, error_3;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetchFunction(rootUrl + "people/?search=" + name)];
                case 1:
                    data = _c.sent();
                    if (!((_a = data === null || data === void 0 ? void 0 : data.results) === null || _a === void 0 ? void 0 : _a.length))
                        throw new Error("No data found");
                    person = data.results[0];
                    if (!((_b = person === null || person === void 0 ? void 0 : person.films) === null || _b === void 0 ? void 0 : _b.length))
                        throw new Error("No films found");
                    return [4 /*yield*/, Promise.all(person.films.map(function (filmUrl) { return fetchFunction(filmUrl); }))];
                case 2:
                    allFilms = _c.sent();
                    filteredFilms = allFilms.filter(function (film) { return film !== undefined; });
                    return [2 /*return*/, { name: person.name, films: filteredFilms }];
                case 3:
                    error_3 = _c.sent();
                    console.error("Task 5: ", error_3);
                    return [2 /*return*/, undefined];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function testGetPersonFilms() {
    return __awaiter(this, void 0, void 0, function () {
        var lukeFilms, kenobiFilms;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getPersonFilms("Luke")];
                case 1:
                    lukeFilms = _a.sent();
                    console.log("Task 5. ", "lukeFilms ", lukeFilms);
                    return [4 /*yield*/, getPersonFilms("Kenobi")];
                case 2:
                    kenobiFilms = _a.sent();
                    console.log("Task 5. ", "kenobiFilms ", kenobiFilms);
                    return [2 /*return*/];
            }
        });
    });
}
testGetPersonFilms();
script_js_1.taskResult(task_33_Result_1, task_33_Result_2, task_33_Result_3, task_33_Result_4, task_33_Result_5);
