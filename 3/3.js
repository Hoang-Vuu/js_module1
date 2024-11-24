document.addEventListener("DOMContentLoaded", () => {
    const targetElement = document.getElementById("target");
    const names = ["John", "Paul", "Jones"];
    let listItems = "";
    for (let i = 0; i < names.length; i++) {
        listItems += `<li>${names[i]}</li>`;
    }
    targetElement.innerHTML = listItems;
});
