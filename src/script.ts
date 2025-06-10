function addToList(list: HTMLElement | null, myFun: (data: any) => string, data: any) {
    const item = document.createElement("li");
    item.textContent = myFun(data).toString();
    list && list.appendChild(item);
}

function taskResult(...tasks: (HTMLElement | null)[]) {
    tasks.forEach(task =>
        task && addToList(task, (): string => "Dear user, please, look in the console", null)
    );
}

interface Album {
    userId: number,
    id: number,
    title: string
}

export { taskResult, addToList, Album };