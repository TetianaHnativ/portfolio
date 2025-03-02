export function addToList(list: HTMLElement | null, myFun: (data: any) => string, data: any) {
    const item = document.createElement("li");
    item.textContent = myFun(data).toString();
    list && list.appendChild(item);
}