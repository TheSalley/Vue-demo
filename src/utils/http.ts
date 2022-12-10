import axios_instance from "./axios_instance";
import { Http, ResType } from "../interface/http";

const http: Http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      axios_instance
        .get(url, params)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err.data));
    });
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      axios_instance
        .post(url, params)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err.data));
    });
  },
  put(url, params) {
    return new Promise((resolve, reject) => {
      axios_instance
        .put(url, params)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err.data));
    });
  },
  delete(url, params) {
    return new Promise((resolve, reject) => {
      axios_instance
        .delete(url, params)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err.data));
    });
  },
  upload(url, file) {
    return new Promise((resolve, reject) => {
      axios_instance
        .post(url, file, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => resolve(res.data))
        .catch((err) => reject(err.data));
    });
  },
  download(url) {},
};

export default http;
