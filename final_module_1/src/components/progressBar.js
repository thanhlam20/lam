import playlistDetailService from "../service/playlistDetailService";
// fake mp3
const songsfake = {
            "type": "song",
            "id": "691cb4fddd97648f59757997",
            "title": "Nhạc Acoustic Album 9 - Bài 5",
            "artists": [
                "Various Artists"
            ],
            "thumbnails": [
                "https://picsum.photos/seed/album-nhc-acoustic-album-9-8/400/400"
            ],
            "audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
            "audioType": "audio/mpeg",
            "duration": 236,
            "popularity": 999
        };

export const progressBar = (src, name, albumname, audioSrc) => {
    return`
    <audio id="audio" src="${songsfake.audioUrl}" class=" mb-[250px] w-full " ></audio>
    <div class="js-progress-bar fixed bottom-0 w-full h-20 bg-[#212121]" >
        <input id="progress" class="w-full progress" type="range" value="0" step="1" min="0" max="100">
        <div class="flex items-center gap-10 justify-between">
            <div class="text-white flex items-center pl-14">
                <i class="js-prev fa-solid fa-backward-step text-2xl"></i>
                <i class="js-play fa-solid fa-play text-4xl"></i>
                <i class="js-pause fa-solid fa-pause text-4xl hidden" ></i>
                <i class="js-next fa-solid fa-forward-step text-2xl"></i>
                <div class="text-white ml-5">
                    <span class="js-minute"></span>
                    <span>/</span>
                    <span class="seconds"></span>
                </div>
            </div>
            <div class="flex gap-3 items-center">
                <div class="">
                <img class="js-img w-[50px] h-[45px] object-cover " src="${src}" alt="nhac">
                </div>
                <div class="text-white">
                    <span class="js-name">${name} </span>
                    <div>
                        <span class="js-album">${albumname}</span>
                    </div>
                </div>
                <div class="text-white">
                    <i class="text-2xl ml-3 fa-regular fa-thumbs-down"></i>
                    <i class="text-2xl ml-3 fa-regular fa-thumbs-up"></i>
                    <i class="fa-solid fa-ellipsis-vertical text-3xl ml-2"></i>
                    </div>
            </div>
            <div class="text-white pr-10 flex items-center gap-3 ">
                <i class="text-2xl fa-solid fa-volume-high"></i>
                <i class="text-2xl fa-solid fa-repeat"></i>
                <i class=" text-2xl fa-solid fa-shuffle"></i>
                <i class="text-4xl fa-solid fa-caret-down"></i>
            </div>
        </div>
    </div>
    `
};


export const initProgressBar = async () => {
    const audioEl = document.querySelector("#audio");
    const playEl = document.querySelector(".js-play");
    const pauseEl = document.querySelector(".js-pause");
    const progressEl = document.querySelector("#progress");
    const nextSong = document.querySelector(".js-next");
    const prevsong = document.querySelector(".js-prev");
    const img = document.querySelector(".js-img");
    const nameEl = document.querySelector(".js-name");
    const album = document.querySelector(".js-album");
    const minute = document.querySelector(".js-minute");
    const seconds = document.querySelector(".seconds");

    let currentIndex = 0;
    const songList = await playlistDetailService.getLineSongs("bu-n-3");

    const formatTime = (sec) => {
        const minute = Math.floor(sec / 60);
        const seconds = Math.floor(sec % 60);
        return `${minute}:${seconds.toString().padStart(2,'0')}`;
    }

    const loadSong = (song) => {
        img.src = song.thumb;
        nameEl.textContent = song.name;
        album.textContent = song.albumName || song.slug;
        audioEl.src = songsfake.audioUrl;
    }

    // Play Pause
    playEl.addEventListener("click", () => {
        audioEl.play(); 
        playEl.classList.add("hidden"); 
        pauseEl.classList.remove("hidden");
    });
    pauseEl.addEventListener("click", () => {
        audioEl.pause();   
        pauseEl.classList.add("hidden");
        playEl.classList.remove("hidden");
    });

    audioEl.ontimeupdate = function () {
        if(audioEl.duration) {
            const progressPercent = audioEl.currentTime / audioEl.duration * 100;
            progressEl.value = progressPercent;
            minute.textContent = formatTime(audioEl.currentTime);
            seconds.textContent = formatTime(audioEl.duration);
        }
    };

    progressEl.addEventListener("input", (e) => {
        const seekTime = audioEl.duration * (e.target.value / 100);
        audioEl.currentTime = seekTime;
    });

    // Next
    nextSong.addEventListener("click", () => {
        currentIndex++;
        if (currentIndex >= songList.length) currentIndex = 0;
        loadSong(songList[currentIndex]);
        audioEl.play();
    });

    // Prev
    prevsong.addEventListener("click", () => {
        currentIndex--;
        if (currentIndex < 0) currentIndex = songList.length - 1;
        loadSong(songList[currentIndex]);
        audioEl.play();
    });
};




