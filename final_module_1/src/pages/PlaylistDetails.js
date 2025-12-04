import { GetSongs } from "../service/playlistDetailService";

export const renderPlaylistDetails = async () => {
    const playlist = await GetSongs(); 
    const songs = playlist?.items || [];
    console.log(songs)

    return `
    <div class="flex gap-56">
        <div class="text-white flex flex-col justify-center items-center mt-10 ml-10 gap-5">
            <span>
            Mc Pogba và 6IX7EVENN   
            </span>
            <a>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc8_-oEOGM4hmKSX5d4lyFMOluoC-bpLv8WNgjdVCCNtxCmHCXrKU9aT49fLE&s" alt="">
            </a>
            <h3 class="text-3xl text-center">ESPANCAMENTO DE XOTA</h3>
            <span>
                Đĩa đơn • 2025
            </span>
            <span>3 bài hát • 6 phút, 16 giây</span>
            <a>
            <i class="fa-solid fa-play text-3xl"></i>
            <i class="fa-solid fa-pause text-3xl" hidden></i>
            </a>
        </div>
        <div class="mt-5">
            <ul class="text-white">
                <li class="flex gap-50 mb-5">
                    <div>
                        <a></a>
                        <span>3 lượt phát</span>
                    </div>
                    <span>02:00</span>
                </li>
                <li class="flex gap-50 mb-5">
                    <div>
                        <a>ESPANCAMENTO DE XOTA</a>
                        <span>3 lượt phát</span>
                    </div>
                    <span>02:00</span>
                </li>
                <li class="flex gap-50 mb-5">
                    <div>
                        <a>ESPANCAMENTO DE XOTA</a>
                        <span>3 lượt phát</span>
                    </div>
                    <span>02:00</span>
                </li>
                <li class="flex gap-50 mb-5">
                    <div>
                        <a>ESPANCAMENTO DE XOTA</a>
                        <span>3 lượt phát</span>
                    </div>
                    <span>02:00</span>
                </li>
            </ul>
        </div>
    </div>

    `
};
