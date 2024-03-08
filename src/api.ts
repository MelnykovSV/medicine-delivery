import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://medicine-delivery-backend-vxas.onrender.com",
});
