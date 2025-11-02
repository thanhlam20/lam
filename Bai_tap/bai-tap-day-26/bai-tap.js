const menu = document.querySelector(".menu");
const tabEl = document.querySelector(".tab");
const renameBox = document.querySelector(".rename-box");
const rename = document.querySelector(".rename");
const overlay = document.querySelector(".overlay");
const renameInput = document.querySelector(".rename-input");
const saveBtn = document.querySelector(".save");

let currentLi = null;

menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("down")) {
        const li = e.target.parentElement;
        const nextElement = li.nextElementSibling;
       if(!nextElement) {
        return;
       }
       menu.insertBefore(li,nextElement.nextElementSibling);
    }
    if (e.target.classList.contains("up")) {
        const li = e.target.parentElement;
        const prevElement = li.previousElementSibling;
        if (!prevElement) {
            return;
        }
        menu.insertBefore(li, prevElement);
    }
    if (e.target.nodeName === "LI") {
        e.stopPropagation();
        removeSelected();
        e.target.classList.add("selected");
    }
});

const removeSelected = () => {
    const itemSelected = document.querySelector(".menu li.selected");
    if (itemSelected) {
        itemSelected.classList.remove("selected");
    }
};
document.addEventListener("click", removeSelected);

///click chuot
menu.addEventListener("contextmenu", (e) => {
  e.preventDefault(); 
  const li = e.target.closest("li"); 
  if (li) {
    currentLi = li;
    tabEl.style.display = "block";
    tabEl.style.left = `${e.pageX}px`; 
    tabEl.style.top = `${e.pageY}px`;
  }
});

document.addEventListener("click", () => {
  hideTabEl();
});

tabEl.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    if (currentLi) {
      menu.removeChild(currentLi);
      currentLi = null;
    }
    hideTabEl();
  }

  if (e.target.classList.contains("rename")) {
    editItem();
    renameInput.value = currentLi.firstChild.textContent.trim();
    renameInput.focus();
  }
});

saveBtn.addEventListener("click", () => {
  const newName = renameInput.value.trim();

  if(newName !== "" && currentLi) {
    const upBtn = currentLi.querySelector(".up");
    const downBtn = currentLi.querySelector(".down");

    currentLi.firstChild.textContent = `${newName} `;

    currentLi.append(upBtn);
    currentLi.append(downBtn);
  }
  hideItem()
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
    hideItem();
  }
});

function editItem() {
  renameBox.style.display = "block";
  overlay.style.display = "block";
}

function hideTabEl() {
  tabEl.style.display = "none";
}

function hideItem() {
   renameBox.style.display = "none";
   overlay.style.display = "none";
}

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    hideItem();
  }
});
