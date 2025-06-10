var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { taskResult } from './script.js';
const rootUrl = 'https://swapi.py4e.com/api/';
function fetchFunction(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            if (!response.ok) {
                throw new Error(`Failed with status code: ${response.status}`);
            }
            const result = (yield response.json());
            return result;
        }
        catch (error) {
            console.error(url, error);
            return undefined;
        }
    });
}
function fetchData(url, message) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const data = yield fetchFunction(url);
        data && console.log(message, (_a = data === null || data === void 0 ? void 0 : data.results) !== null && _a !== void 0 ? _a : data);
    });
}
/* ------------------------------ Task 1 ------------------------------ */
const task_33_Result_1 = document.getElementById("task-1-result");
fetchData('https://jsonplaceholder.typicode.com/users/1/albums', "Task 1. Result (albums): ");
/* ------------------------------ Task 2 ------------------------------ */
const task_33_Result_2 = document.getElementById("task-2-result");
fetchData(`${rootUrl}planets/`, "Task 2. Result (planets): ");
/* ------------------------------ Task 3 ------------------------------ */
const task_33_Result_3 = document.getElementById("task-3-result");
function getByName(name) {
    return __awaiter(this, void 0, void 0, function* () {
        fetchData(`${rootUrl}people/?search=${name}`, `Task 3. Result (people with surname ${name}): `);
    });
}
getByName("Skywalker");
/* ------------------------------ Task 4 ------------------------------ */
const task_33_Result_4 = document.getElementById("task-4-result");
function fetchSWAPI(resource_1) {
    return __awaiter(this, arguments, void 0, function* (resource, throwError = false) {
        var _a;
        const theURL = (_a = (resource.includes(rootUrl) ? resource : rootUrl + resource)) !== null && _a !== void 0 ? _a : "";
        if (throwError)
            throw new Error(`${resource} - Request is failed`);
        return yield fetchFunction(theURL);
    });
}
function testFetchSWAPI() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const person = yield fetchSWAPI("people/1/");
            console.log("Task 4: ", "person ", person);
            const film = yield fetchSWAPI("https://swapi.py4e.com/api/films/1/");
            console.log("Task 4: ", "film ", film);
            const film1001Id = yield fetchSWAPI("films/1001/");
            console.log("Task 4: ", "film1001Id ", film1001Id);
            // should throw error
            yield fetchSWAPI("films/1101/", true);
        }
        catch (error) {
            console.error("Task 4: ", "testFetchSWAPI error ", error);
        }
    });
}
testFetchSWAPI();
/* ------------------------------ Task 5 ------------------------------ */
const task_33_Result_5 = document.getElementById("task-5-result");
function getPersonFilms(name) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        try {
            const data = yield fetchFunction(`${rootUrl}people/?search=${name}`);
            if (!((_a = data === null || data === void 0 ? void 0 : data.results) === null || _a === void 0 ? void 0 : _a.length))
                throw new Error("No data found");
            const person = data.results[0];
            if (!((_b = person === null || person === void 0 ? void 0 : person.films) === null || _b === void 0 ? void 0 : _b.length))
                throw new Error("No films found");
            const allFilms = yield Promise.all(person.films.map((filmUrl) => fetchFunction(filmUrl)));
            const filteredFilms = allFilms.filter((film) => film !== undefined);
            return { name: person.name, films: filteredFilms };
        }
        catch (error) {
            console.error("Task 5: ", error);
            return undefined;
        }
    });
}
function testGetPersonFilms() {
    return __awaiter(this, void 0, void 0, function* () {
        const lukeFilms = yield getPersonFilms("Luke");
        console.log("Task 5. ", "lukeFilms ", lukeFilms);
        const kenobiFilms = yield getPersonFilms("Kenobi");
        console.log("Task 5. ", "kenobiFilms ", kenobiFilms);
    });
}
testGetPersonFilms();
taskResult(task_33_Result_1, task_33_Result_2, task_33_Result_3, task_33_Result_4, task_33_Result_5);
