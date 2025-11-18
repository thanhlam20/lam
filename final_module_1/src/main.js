import "./assets/main.css";
import { header } from "./components/header";
const root = document.querySelector("#app");
root.innerHTML = 
`<header>
${header()}
</header>
<main>

</main>
`