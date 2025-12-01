import { API_URL } from "../service/playlistDetailService";
export const loadTagList = async () => {
    try {
        const res = await fetch(`${API_URL}/moods`);
        const data = await res.json();

        const moods = data.items || [];

        const html = moods
          .map(mood => `
            <span class="px-3 py-1 bg-[#ffffff1f] rounded-lg text-white cursor-pointer whitespace-nowrap">
                ${mood.name}
            </span>
          `)
          .join("");

        const container = document.querySelector("#tag-container");
        if (container) {
            container.innerHTML = `
            <div class="overflow-x-auto no-scrollbar py-6 mt-5 w-[1100px]">
                <div class="flex gap-3 max-w-5xl px-2">
                    ${html}
                </div>
            </div>`;
        }

    } catch (error) {
        console.error("Lỗi", error);
    }
};
