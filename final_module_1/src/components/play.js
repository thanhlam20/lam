import { songs } from "./songlist";


const songlists = songs;
console.log()

export const Playlist = () => {
    return `
    <div class="text-white fixed bottom-0 w-full h-24 bg-[#212121]">
        <div>
            <input type="range" min="0" max="100" value="0" class="w-full mb-4" />
            <audio src=""></audio>
        </div>
        <div class="flex justify-between px-8">
            <div class=" text-2xl flex items-center gap-6">
                <i class="fa-solid fa-backward-step cursor-pointer"></i>
                <i class="fa-solid fa-play text-4xl cursor-pointer"></i>
                <i class="fa-solid fa-pause text-4xl cursor-pointer" hidden></i>
                <i class="fa-solid fa-forward-step cursor-pointer"></i>
            </div>
            <div class="flex items-center gap-6">
                <img class="cursor-pointer w-20" src="${songlists[2].image}" alt="logo" />
                <div class="flex flex-col">
                    <span class="text-xl">${songlists[0].singer}</span>
                    <span class="text-sm text-[#f0f0f08a] ">${songlists[0].name} </span>
                </div>
                <i class=" text-2xl cursor-pointer fa-regular fa-thumbs-down"></i>
                <i class=" text-2xl cursor-pointer fa-regular fa-thumbs-up"></i>
                <i class=" text-2xl cursor-pointer fa-solid fa-ellipsis-vertical"></i>
            </div>  
            <div class="flex gap-6 text-2xl items-center">
                <i class="fa-solid fa-volume-high cursor-pointer"></i>
                <i class="fa-solid fa-repeat cursor-pointer"></i>
                <i class="fa-solid fa-shuffle cursor-pointer"></i>
                <i class="fa-solid fa-caret-up text-3xl cursor-pointer"></i>
            </div>
        </div>
    </div>
    `
}