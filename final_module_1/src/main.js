import "./style.css";
import { app } from "./app";
import { initSidebar } from "./components/sidebar";

const render = async () => {
    document.querySelector("#app").innerHTML = await app();
    initSidebar();
};

render();

