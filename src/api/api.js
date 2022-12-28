import axios from "axios";

const baseURL = "https://social-network.samuraijs.com/api/1.0/";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL,
  headers: {
    "API-KEY": "25b29e35-7d3f-4e4f-aa8c-4c33ae4a48c7",
  },
});

export const usersAPI = {
  getUsers: (currentPage = 1, pageSize = 10) => {
    return axiosInstance
      .get(`users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
      })
      .then((response) => response.data);
  },
  follow: (userId) => {
    return axiosInstance.post(`follow/${userId}`);
  },
  unfollow: (userId) => {
    return axiosInstance.delete(`follow/${userId}`);
  },
};

export const profileAPI = {
  getProfile: (userId) => {
    return axiosInstance
      .get(`profile/${userId}`)
      .then((response) => response.data);
  },
  getStatus: (userId) => {
    return axiosInstance
      .get(`profile/status/${userId}`)
      .then((response) => response.data);
  },
  updateStatus: (status) => {
    return axiosInstance.put(`profile/status`, {
      status,
    });
  },
  savePhoto: (photoFile) => {
    const formData = new FormData();

    formData.append("image", photoFile);

    return axiosInstance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  saveProfile: (profileData) => {
    return axiosInstance.put(`profile`, profileData);
  },
};

export const authAPI = {
  authMe: () => {
    return axiosInstance.get("auth/me").then((response) => response.data);
  },
  login: (email, password, rememberMe = false) => {
    return axiosInstance
      .post("auth/login", { email, password, rememberMe })
      .then((response) => response.data);
  },
  logout: () => {
    return axiosInstance.delete("auth/login").then((response) => response.data);
  },
};
