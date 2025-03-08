import axios, { AxiosRequestConfig } from "axios";
import config from "../../config.json";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: config.REACT_APP_API_KEY,
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => {
        return res.data;
      });
  };

  getOne = (id: number | string) => {
    return axiosInstance.get<T>(`${this.endpoint}/${id}`).then((res) => {
      return res.data;
    });
  };
}

export default APIClient;
