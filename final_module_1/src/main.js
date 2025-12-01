import "./style.css";
import { API_URL } from "./service/playlistDetailService";
import initRoute from "./route/route";
import { app } from "./app";
import { initSidebar } from "./components/sidebar";
import { loadTagList } from "./components/taglist";
import { hanelClickMusic } from "./components/SongsByLine";
import { ToDayHits } from "./components/ToDayHit";
const render = async () => {
    document.querySelector("#app").innerHTML = await app();
    initSidebar();
    loadTagList();
    await hanelClickMusic();
    ToDayHits();
};

await render();

await initRoute()
