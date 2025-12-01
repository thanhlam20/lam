import { SideBar } from "../components/sidebar";
import { Header } from "../components/header";
import { ToDayHits } from "../components/ToDayHit";
import { SongsByLine } from "../components/SongsByLine";
async function Home() {
    return `
    <div id="header" class="fixed w-full z-50">
        ${Header()}
    </div>

    <div id="main" class="flex gap-4">
        <div class="w-80">
            ${SideBar()}
        </div>
        <div class="js-content flex flex-col mt-20 w-[1100px] overflow-x-hidden">
            <div id="tag-container"></div>
            <div id="to-day-hit"></div>
            <div>${await SongsByLine()} </div>
        </div>
    </div>
    <div id="footer"></div>
     `;
};

export default Home;