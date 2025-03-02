export function addToList(list, myFun, data) {
    const item = document.createElement("li");
    item.textContent = myFun(data).toString();
    list && list.appendChild(item);
}
