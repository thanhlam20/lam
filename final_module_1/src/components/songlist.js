export const songs = [
  {
    name: "Click Pow Get Down",
    singer: "Raftaar x Fortnite",
    path: "https://samplelib.com/lib/preview/mp3/sample-12s.mp3",
    image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg"
  },
  {
    name: "Tu Phir Se Aana",
    singer: "Raftaar x Salim Merchant x Karma",
    path: "https://samplelib.com/lib/preview/mp3/sample-9s.mp3",
    image: "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
  },
  {
    name: "Naachne Ka Shaunq",
    singer: "Raftaar x Brobha V",
    path: "https://samplelib.com/lib/preview/mp3/sample-6s.mp3",
    image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg"
  },
  {
    name: "Mantoiyat",
    singer: "Raftaar x Nawazuddin Siddiqui",
    path: "https://samplelib.com/lib/preview/mp3/sample-15s.mp3",
    image: "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg"
  },
  {
    name: "Aage Chal",
    singer: "Raftaar",
    path: "https://samplelib.com/lib/preview/mp3/sample-11s.mp3",
    image: "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg"
  },
  {
    name: "Feeling You",
    singer: "Raftaar x Harjas",
    path: "https://samplelib.com/lib/preview/mp3/sample-5s.mp3",
    image: "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp"
  },
];



export const ListSongs = () => {
  const html = songs
    .map(song => {
      return `
        <div class="flex-none w-36 bg-[#1e2a33] rounded-lg p-2 cursor-pointer hover:bg-[#2a3a44]">
          <img src="${song.image}" alt="${song.singer}" class="w-full h-36 rounded-lg object-cover" />
          <h3 class="text-white text-sm mt-2 truncate">${song.singer}</h3>
          <p class="text-gray-300 text-xs truncate">${song.name}</p>
        </div>
      `;
    })
    .join("");

    return `
  <div class=" w-full mt-5">
  <div class="flex items-center justify-between mb-3 px-2 ">
    <h2 class="text-2xl text-white">Playlist</h2>
        <div class="flex gap-3">
        <i class="fa-solid fa-chevron-left text-xl border border-white text-white p-1 cursor-pointer rounded-full "></i>
        <i class="fa-solid fa-chevron-right text-xl border border-white text-white p-1 cursor-pointer rounded-full "></i>
        </div>
    </div>
    <div class="overflow-x-auto no-scrollbar pb-5">
      <div class="js-list-songs flex gap-4 max-w-5xl">
        ${html}
      </div>
    </div>
  </div>
`;

};

