import { SideBar } from "../components/sidebar";
import { Header } from "../components/header";
import { TagList } from "../components/taglist";
// import { ListSongs } from "../components/songlist";
function Home() {
    return `
    <div id="header" class="fixed w-full z-50">
    ${Header()}
    </div>
    <div id="main" class="flex gap-20">
     ${SideBar()}
     <div class="flex flex-col mt-20">
     ${TagList()}
     </div>
     </div>
     `
};

export default Home;