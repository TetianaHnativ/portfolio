import { addToList, taskResult } from './script.js';
const baseUrl = "https://jsonplaceholder.typicode.com";
function getData(url, options) {
    return fetch(url, options)
        .then(response => {
        if (!response.ok) {
            throw new Error(`Connection failed with status code:${response.status}`);
        }
        return response.json();
    })
        .catch((error) => {
        console.error(`Fetch error from ${url}: ${(error instanceof Error) ? error.message : error}`);
        return null;
    });
}
/* ------------------------------ Task 1 ------------------------------ */
const task_30_Result_1 = document.getElementById("task-1-result");
getData(`${baseUrl}/users`).then(data => data && console.log("Task 1. Users:", data));
/* ------------------------------ Task 2 ------------------------------ */
const task_30_Result_2 = document.getElementById("task-2-result");
function albumUser(userId) {
    getData(`${baseUrl}/users/${userId}/albums`).then(data => data && console.log(`Task 2. Array of user albums with id ${userId}:`, data));
}
albumUser(10);
/* ------------------------------ Task 3 ------------------------------ */
const task_30_Result_3 = document.getElementById("task-3-result");
const newUser = {
    name: "Name LastName",
    username: "UserName",
    email: "usermail@gmail.com"
};
getData(`${baseUrl}/users`, {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(newUser),
}).then(data => addToList(task_30_Result_3, (data) => `New user: { ${Object.entries(data)
    .map(([key, value]) => `${key}: ${typeof value === 'string' ? `"${value}"` : value}`)
    .join(', ')} }`, data));
/* ------------------------------ Task 4 ------------------------------ */
const task_30_Result_4 = document.getElementById("task-4-result");
function getAlbum(id) {
    return getData(`${baseUrl}/albums/${id}`);
}
function getSpecifiedAlbums(ids = []) {
    const promises = ids.map(id => getAlbum(id));
    return Promise.allSettled(promises)
        .then(results => results
        .filter((result) => result.status === "fulfilled")
        .map(result => result.value));
}
getSpecifiedAlbums([1, 15, 0])
    .then((results) => {
    console.log("Task 4. Results: ", results);
});
taskResult(task_30_Result_1, task_30_Result_2, task_30_Result_4);
