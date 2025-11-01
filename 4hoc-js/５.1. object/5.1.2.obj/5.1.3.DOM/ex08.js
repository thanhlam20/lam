///clon node

// const app = document.querySelector("#app");
// const btn = document.querySelector("button");
// const h2 = document.querySelector("h2");

const ul = document.querySelector("ul");

ul.addEventListener("click", (e) => {
    if (e.target.classList.contains("down")) {
         const li = e.target.parentElement;
         const nextElement = li.nextElementSibling;
         if(!nextElement) {
            return;
         }
         ul.insertBefore(nextElement, li);
    }
    // lấy li tương ứng
    //insert vào sau phần tử kế tiếp (item2: insert sau item 3)
       if (e.target.classList.contains("up")) {
        const li = e.target.parentElement;
        const prevElement = li.previousElementSibling;
        if (!prevElement) {
            return;
        }
        ul.insertBefore(li, prevElement);
       }
       if (e.target.nodeName === "LI") {
        e.stopPropagation;
        removeSelected();
        e.target.classList.add("selected");
       }
});

const removeSelected = () => {
    const itemSelected = document.querySelector("ul li.selected");
    if (itemSelected) {
        itemSelected.classList.remove("selected");
    }
}

document.addEventListener("click", removeSelected);