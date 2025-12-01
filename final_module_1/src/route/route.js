import Navigo from "navigo";
import { renderPlaylistDetails } from "../pages/PlaylistDetails";
import Home from "../pages/home";

const route = new Navigo("/");
const initRoute = async () => {
    const bodyContent = document.querySelector(".js-content")
    
    route.on("/", () => {
        // bodyContent.innerHTML = Home();
    })

    .on("/playlist", async () => {
        bodyContent.innerHTML = await renderPlaylistDetails();
    })
    .resolve()
};

export default initRoute;