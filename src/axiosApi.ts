import axios from "axios";

const axiosApi = axios.create({
  baseURL: 'https://sultan-shop-1c970-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default axiosApi;