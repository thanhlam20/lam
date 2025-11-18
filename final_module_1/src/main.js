import "./style.css";
import app from "./app"

const render = async () => {
    document.querySelector("#app").innerHTML = await app();
    initSidebar();
};

const initSidebar = () => {
    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar-container");
    const liEl = document.querySelector(".js-list");

    if (!hamburger || !sidebar) return;

    hamburger.addEventListener("click", () => {
        sidebar.classList.toggle("w-50");
        sidebar.classList.toggle("w-21");
        
        const textList = document.querySelectorAll(".js-sidebar-text");
        textList.forEach((text) => {
            text.classList.toggle("hidden")
        });
    });

    document.addEventListener("click", (e) => {
    const liEl = e.target.closest(".js-list");
    const list = document.querySelectorAll(".js-list");
    if (!liEl) return;
    list.forEach((li) => {
        li.classList.remove("bg-[#333]");
    });
    liEl.classList.add("bg-[#333]")
});
};


render();

