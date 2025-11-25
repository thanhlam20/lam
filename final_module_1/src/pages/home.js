import { SideBar } from "../components/sidebar";
import { Header } from "../components/header";
import { ToDayHits } from "../components/ToDayHit";
function Home() {
    return `
    <div id="header" class="fixed w-full z-50">
        ${Header()}
    </div>
        <div id="main" class="flex gap-4">
  <div class="w-64">
    ${SideBar()}
  </div>
  <div class="flex flex-col mt-20 w-[1100px] overflow-x-hidden">
    <div id="tag-container"></div>
    <div id="to-day-hit">${ToDayHits()} </div>
  </div>
</div>

     </div>
     <div id="footer">
     </div>
     `;
};

export default Home;