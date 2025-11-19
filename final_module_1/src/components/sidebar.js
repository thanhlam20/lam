export const SideBar = () => {
    return `
    <div id="sidebar-container" class=" flex top-0 left-0 min-h-screen w-50 p-4 flex-col bg-[#030303e8] pt-25">
        <ul id="sidebar" class="flex fixed flex-col gap-4  text-lg text-white ">
            <li class="js-list flex gap-6 items-center py-3 px-2 pr-5 rounded-md bg-[#333] cursor-pointer">
            <i class="fa-regular fa-house px-2 text-2xl "></i>
            <a class="js-sidebar-text text-base">Trang chủ</a>
            </li>
            <li class="js-list flex gap-6 items-center py-3 px-2 pr-5  rounded-md cursor-pointer">
            <i class="fa-regular fa-compass px-2  text-2xl"></i>
            <a class="js-sidebar-text text-base">Khám phá</a>
            </li>
            <li class="js-list flex gap-6 items-center py-3 px-2 pr-5  rounded-md cursor-pointer">
            <i class="fa-regular fa-bookmark px-2  text-2xl"></i>
            <a class="js-sidebar-text text-base">Thư viện</a>
            </li>
            <li class="js-list flex gap-6 items-center py-3 px-2 pr-5  rounded-md cursor-pointer">
            <i class="fa-regular fa-circle-play px-2 text-2xl "></i>
            <a class="js-sidebar-text text-base">Nâng cấp</a>
            </li>
        </ul>
    </div>
    `
};

/// Xử lý đóng mở sidebar
 export const initSidebar = () => {
    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar-container");
    const songlistWidth = document.querySelector(".js-list-songs")
    console.log(songlistWidth)

    if (!hamburger || !sidebar) return;

    hamburger.addEventListener("click", () => {
        sidebar.classList.toggle("w-50");
        sidebar.classList.toggle("w-21");
        songlistWidth.classList.toggle("max-w-5xl")
        songlistWidth.classList.toggle("max-w-1xl")
        
        
        const textList = document.querySelectorAll(".js-sidebar-text");
        textList.forEach((text) => {
            text.classList.toggle("hidden")
        });
    });

    document.addEventListener("click", (e) => {
    const liEl = e.target.closest(".js-list");
    const list = document.querySelectorAll(".js-list");
    if (!liEl) return;
    list.forEach((li) => {
        li.classList.remove("bg-[#333]");
    });
    liEl.classList.add("bg-[#333]")
});
};



