import playlistDetailService, { getLineSongs } from "../service/playlistDetailService";
import { progressBar, initProgressBar } from "./progressBar";

export const SongsByLine = async () => {
  const Size = 2;
  const columns = [];

  const getLineSongs = await playlistDetailService.getLineSongs("bu-n-3")
  
  for (let i = 0; i < getLineSongs.length; i += Size) {
    columns.push(getLineSongs.slice(i, i + Size));
  }

  const listSongs = columns.map(col => {
    return `
      <div class="js-song-line flex flex-col gap-4 w-[400px] cursor-pointer">
        ${col.map(song => `
          <div data-id="${song.id}" data-thumb="${song.thumb}" data-name="${song.name}" data-albumName="${song.albumName}" class=" flex items-center gap-3 w-[400px] ">
            <img src="${song.thumb}" alt="${song.name}" class="w-16 h-16 rounded-md object-cover">
            <div class="flex flex-col">
              <span class="font-semibold">${song.name}</span>
              <span class="text-sm text-gray-300">${song.albumName}</span>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }).join("");

  return `
    <div class="text-white pt-5">
      <h2 class="text-3xl mb-4">Songs</h2>
      <div class="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-900">
        ${listSongs}
      </div>
    </div>
  `;
};



export const hanelClickMusic = async () => {
  const songLines = document.querySelectorAll(".js-song-line");

  if (!songLines.length) return;

  songLines.forEach(line => {
    line.addEventListener("click", async (e) => {

      const parent = e.target.closest("[data-id]");
      if (!parent) return;

      const thumb = parent.dataset.thumb;
      const name = parent.dataset.name;
      const albumname = parent.dataset.albumname;
      const id = parent.dataset.id;

      const songDetail = await playlistDetailService.getDetailSong(id);

      const footer = document.querySelector("#footer");
      const getProgress = progressBar(thumb, name, albumname, songDetail.audioUrl);
      footer.innerHTML = getProgress;

      await initProgressBar();
    });
  });
};