import { search } from "./search";
import { login } from "./login";
export const Header = () => {
    return `
    <div class="border-b border-[#e0d8d817] p-3 flex justify-between items-center bg-[#030303e8] ">
        <div class="flex gap-8 items-center ml-3">
           <button id="hamburger">
           <i class="fa-solid fa-bars text-2xl cursor-pointer text-white "></i>
           </button>
            <img class="w-20 cursor-pointer" src="./src/assets/img/youtube-music.svg" alt="logo">
        </div>
        ${search()}
        ${login()}
    </div>
    `
}
