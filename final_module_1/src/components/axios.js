import { getAccessToken, getNewToken, logout, saveToken } from "./utils.js";
export const axiosInstance = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1",
}); 

let refreshTokenPromise = null;

// cau hinh interceptor tai day
axiosInstance.interceptors.request.use((config) => {
   const accessToken = getAccessToken();
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config;
});

axiosInstance.interceptors.response.use((response) => {
    return response;
}, async (error) => {
    if (error.status === 401) {
        if (!refreshTokenPromise) {
            refreshTokenPromise = getNewToken();
        }
       const newToken = await refreshTokenPromise;
      if (!newToken) {
        logout();
        return;
      }
      //neu lay token moi thanh cong
      //1. luu token moi vao storage
      saveToken(newToken);
      //2. goi lai request bi failed
      return axiosInstance(error.config);

    }

    return Promise.reject(error);
    }
);