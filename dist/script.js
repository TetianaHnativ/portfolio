function addToList(list, myFun, data) {
    const item = document.createElement("li");
    item.textContent = myFun(data).toString();
    list && list.appendChild(item);
}
function taskResult(...tasks) {
    tasks.forEach(task => task && addToList(task, () => "Dear user, please, look in the console", null));
}
export { taskResult, addToList };
