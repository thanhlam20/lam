import { API_URL } from "../main.js";

const getToDayHit = async () => {
    try {
        const res = await fetch(`${API_URL}/home/todays-hits`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
        return [];
    }
};

export const ToDayHits = () => {
    getToDayHit().then(data => {
        const container = document.querySelector("#to-day-hit");
        const html = `
            <h2 class="text-white text-2xl font-bold mb-4">Today's Hits</h2>
            <div class="flex gap-4 overflow-x-auto ">
                ${data.map(item => `
                    <div class="w-52 bg-[#212121] rounded-lg shadow shrink-0 cursor-pointer">
                        <img src="${item.thumbnails[0]}" 
                             alt="${item.title}" 
                             class="w-full h-32 object-cover rounded-t-lg">
                        <div class="p-2">
                            <span class="text-white font-semibold block text-sm">${item.title}</span>
                            <span class="text-white text-xs">${item.artists.join("")}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        container.innerHTML = html;
    });
};
