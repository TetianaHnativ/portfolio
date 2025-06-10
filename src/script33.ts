import { taskResult, Album } from './script.js';

type ApiResult = {
    name: string;
    films?: string[];
};

type Film = {
    episodeId: string;
    title: string;
    releaseDate: string;
    url: string;
    director: string;
    producer: string;
}

type ApiResponse<T> = {
    results: T[];
};

const rootUrl: string = 'https://swapi.py4e.com/api/';

async function fetchFunction<T>(url: string): Promise<T | undefined> {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed with status code: ${response.status}`);
        }
        const result = (await response.json()) as T;
        return result;
    } catch (error: unknown) {
        console.error(url, error);
        return undefined;
    }
}

async function fetchData<T>(url: string, message: string) {
    const data = await fetchFunction<ApiResponse<T>>(url);
    data && console.log(message, data?.results ?? data);
}

/* ------------------------------ Task 1 ------------------------------ */

const task_33_Result_1: HTMLElement | null = document.getElementById("task-1-result");

fetchData<Album[]>('https://jsonplaceholder.typicode.com/users/1/albums', "Task 1. Result (albums): ");

/* ------------------------------ Task 2 ------------------------------ */

const task_33_Result_2: HTMLElement | null = document.getElementById("task-2-result");

fetchData<ApiResult[]>(`${rootUrl}planets/`, "Task 2. Result (planets): ");

/* ------------------------------ Task 3 ------------------------------ */

const task_33_Result_3: HTMLElement | null = document.getElementById("task-3-result");

async function getByName(name: string) {
    fetchData<ApiResult[]>(`${rootUrl}people/?search=${name}`, `Task 3. Result (people with surname ${name}): `);
}
getByName("Skywalker");

/* ------------------------------ Task 4 ------------------------------ */

const task_33_Result_4: HTMLElement | null = document.getElementById("task-4-result");

async function fetchSWAPI(resource: string, throwError: boolean = false): Promise<ApiResult | Film | undefined> {
    const theURL: string = (resource.includes(rootUrl) ? resource : rootUrl + resource) ?? "";
    if (throwError) throw new Error(`${resource} - Request is failed`);
    return await fetchFunction<ApiResult | Film>(theURL);
}

async function testFetchSWAPI() {
    try {
        const person = await fetchSWAPI("people/1/");
        console.log("Task 4: ", "person ", person);

        const film = await fetchSWAPI("https://swapi.py4e.com/api/films/1/");
        console.log("Task 4: ", "film ", film);

        const film1001Id = await fetchSWAPI("films/1001/");
        console.log("Task 4: ", "film1001Id ", film1001Id);

        // should throw error
        await fetchSWAPI("films/1101/", true);
    } catch (error: unknown) {
        console.error("Task 4: ", "testFetchSWAPI error ", error);
    }
}

testFetchSWAPI();

/* ------------------------------ Task 5 ------------------------------ */

const task_33_Result_5: HTMLElement | null = document.getElementById("task-5-result");

async function getPersonFilms(name: string): Promise<{ name: string, films: Film[] } | undefined> {
    try {
        const data = await fetchFunction<ApiResponse<ApiResult>>(`${rootUrl}people/?search=${name}`);
        if (!data?.results?.length) throw new Error("No data found");
        const person = data.results[0];
        if (!person?.films?.length) throw new Error("No films found");
        const allFilms = await Promise.all(
            person.films.map((filmUrl: string) => fetchFunction<Film>(filmUrl))
        );
        const filteredFilms = allFilms.filter((film): film is Film => film !== undefined);
        return { name: person.name, films: filteredFilms };
    } catch (error: unknown) {
        console.error("Task 5: ", error);
        return undefined;
    }
}


async function testGetPersonFilms() {
    const lukeFilms = await getPersonFilms("Luke");
    console.log("Task 5. ", "lukeFilms ", lukeFilms);

    const kenobiFilms = await getPersonFilms("Kenobi");
    console.log("Task 5. ", "kenobiFilms ", kenobiFilms);
}

testGetPersonFilms();

taskResult(task_33_Result_1, task_33_Result_2, task_33_Result_3, task_33_Result_4, task_33_Result_5);