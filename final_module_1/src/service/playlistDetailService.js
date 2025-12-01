export const API_URL = "https://youtube-music.f8team.dev/api";

export const GetSongs = async (slug) => {
    try {
        const res = await fetch(`${API_URL}/playlists/details/${slug}`);
        const data = await res.json();
        console.log("Playlist:", data);
        return data;
    } catch (e) {
        console.error(e);
    }
};

export const getLineSongs = async (slug, limit = 20) => {
    try {
        const url = `${API_URL}/lines/${slug}/songs?limit=${limit}`;
        const res = await fetch(url);
        const data = await res.json();
        return data.items || [];
    } catch (e) {
        console.error(e);
    }
};

export const getDetailSong = async (id) => {
    try {
        const url = `${API_URL}/songs/details/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        return data || [];
    } catch (e) {
        console.error(e);
    }
}

export default {
    GetSongs,
    getLineSongs,
    getDetailSong
};
