import { SideBar } from "../components/sidebar";
import { Header } from "../components/header";
import { TagList } from "../components/taglist";
import { ListSongs } from "../components/songlist";
import { Playlist } from "../components/play";
function Home() {
    return `
    <div id="header" class="fixed w-full z-50">
        ${Header()}
    </div>
    <div id="main" class="flex gap-20">
         ${SideBar()}
        <div class="flex flex-col mt-20">
            ${TagList()}
            ${ListSongs()}
            ${ListSongs()}
            ${ListSongs()}
        </div>
     </div>
     <div id="footer">
     ${Playlist()}
     </div>
     `;
};

export default Home;