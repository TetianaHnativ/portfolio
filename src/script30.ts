import { addToList } from './script.js';

const baseUrl = "https://jsonplaceholder.typicode.com";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: object;
    phone: string;
    website: string;
    company: object;
}

interface Album {
    userId: number,
    id: number,
    title: string
}

function getData<T>(url: string, options?: RequestInit): Promise<T | null> {
    return fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Connection failed with status code:${response.status}`);
            }
            return response.json();
        })
        .catch((error: any) => {
            console.error(`Fetch error from ${url}: ${error.message || error}`);
            return null;
        });
}

/* ------------------------------ Task 1 ------------------------------ */

const task_30_Result_1: HTMLElement | null = document.getElementById("task-1-result");


getData<User[]>(`${baseUrl}/users`).then(data => data && console.log("Task 1. Users:", data));

/* ------------------------------ Task 2 ------------------------------ */

const task_30_Result_2: HTMLElement | null = document.getElementById("task-2-result");

function albumUser(userId: number): void {
    getData<Album[]>(`${baseUrl}/users/${userId}/albums`).then(data => data && console.log(`Task 2. Array of user albums with id ${userId}:`, data));
}

albumUser(10);

/* ------------------------------ Task 3 ------------------------------ */

const task_30_Result_3: HTMLElement | null = document.getElementById("task-3-result");

const newUser = {
    name: "Name LastName",
    username: "UserName",
    email: "usermail@gmail.com"
};

getData<User>(`${baseUrl}/users`, {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(newUser),
}).then(data =>
    addToList(task_30_Result_3, (data): string => `New user: { ${Object.entries(data)
        .map(([key, value]) => `${key}: ${typeof value === 'string' ? `"${value}"` : value}`)
        .join(', ')} }`, data));

/* ------------------------------ Task 4 ------------------------------ */

const task_30_Result_4: HTMLElement | null = document.getElementById("task-4-result");

function getAlbum(id: number): Promise<Album | null> {
    return getData<Album>(`${baseUrl}/albums/${id}`);
}

function getSpecifiedAlbums(ids: number[] = []): Promise<Album[]> {
    const promises = ids.map(id => getAlbum(id));

    return Promise.allSettled(promises)
        .then(results => results
            .filter((result): result is PromiseFulfilledResult<Album> => result.status === "fulfilled")
            .map(result => result.value)
        );
}

getSpecifiedAlbums([1, 15, 0])
    .then((results) => {
        console.log("Task 4. Results: ", results);
    })

/* ------------------------------------------------------------ */

function taskResult(...tasks: (HTMLElement | null)[]) {
    tasks.forEach(task =>
        task && addToList(task, (): string => "Dear user, please, look in the console", null)
    );
}

taskResult(task_30_Result_1, task_30_Result_2, task_30_Result_4);