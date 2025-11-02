// //clone node
// const app = document.querySelector("#app");
// const btn = document.querySelector("button");
// const h2 = document.querySelector("h2");

// btn.addEventListener("click", () => {
//     // const content = app.innerHTML;
//     // app.innerHTML += content;
//     const h2Clone = h2.cloneNode(true);
//     app.append(h2Clone);
// });

// up down

const ul = document.querySelector("ul");
ul.addEventListener("click", (e) => {
    if (e.target.classList.contains("down")) {
        const li = e.target.parentElement;
        const nextElement = li.nextElementSibling;
       if(!nextElement) {
        return;
       }
       ul.insertBefore(li,nextElement.nextElementSibling);
    }
    if (e.target.classList.contains("up")) {
        const li = e.target.parentElement;
        const prevElement = li.previousElementSibling;
        if (!prevElement) {
            return;
        }
        ul.insertBefore(li, prevElement);
    }
    if (e.target.nodeName === "LI") {
        e.stopPropagation();
        removeSelected();
        e.target.classList.add("selected");
    }
});

const removeSelected = () => {
    const itemSelected = document.querySelector("ul li.selected");
    if(itemSelected) {
        itemSelected.classList.remove("selected");
    }
};
document.addEventListener("click", removeSelected);
