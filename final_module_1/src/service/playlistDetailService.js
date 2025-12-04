export const API_URL = "https://youtube-music.f8team.dev/api";

export const GetSongs = async () => {
    try {
        const res = await fetch(`${API_URL}/lines/bu-n-3/playlists`);
        const data = await res.json();

        return data;
    } catch (e) {
        console.error("GetSongs error:", e);
    }
};

export const getLineSongs = async (slug, limit = 20) => {
    try {
        const url = `${API_URL}/lines/${slug}/songs?limit=${limit}`;
        const res = await fetch(url);
        const data = await res.json();

        if (Array.isArray(data?.items)) return data.items;

        if (Array.isArray(data)) return data;

        return [];
    } catch (e) {
        console.error("getLineSongs error:", e);
        return [];
    }
};

export const getDetailSong = async (id) => {
    try {
        const url = `${API_URL}/songs/details/${id}`;
        const res = await fetch(url);
        const data = await res.json();

        return data || null;
    } catch (e) {
        console.error("getDetailSong error:", e);
        return null;
    }
};

export default {
    GetSongs,
    getLineSongs,
    getDetailSong
};
