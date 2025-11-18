import { search } from "./search";
import { login } from "./login";
export const header = () => {
    return `
    <div class="border-b border-[#e0d8d817] p-3 flex justify-between items-center">
        <div class="flex gap-4 items-center">
            <i class="fa-solid fa-bars text-2xl cursor-pointer "></i>
            <img class="w-20 cursor-pointer" src="./src/assets/img/YouTube_Music_2024.png" alt="logo">
        </div>
        ${search()}
        ${login()}
    </div>
    `
}
