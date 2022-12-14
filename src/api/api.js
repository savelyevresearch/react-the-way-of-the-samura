import axios from "axios";

const baseUrl = "https://social-network.samuraijs.com/api/1.0";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: baseUrl,
  headers: {
    "API-KEY": "25b29e35-7d3f-4e4f-aa8c-4c33ae4a48c7",
  },
});

export const usersAPI = {
  getUsers: (currentPage = 1, pageSize = 10) => {
    return axiosInstance
      .get(`/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
      })
      .then((response) => response.data);
  },
  follow: (userId) => {
    return axiosInstance.post(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
    );
  },
  unfollow: (userId) => {
    return axiosInstance.delete(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
    );
  },
};
