import axios, { AxiosRequestConfig } from 'axios';

if (process.env.NODE_ENV === 'development') {
  require('../../mock');
}

const http = axios.create({
  timeout: 10 * 1000
});

export const get = (url: string, options: AxiosRequestConfig) =>
  http.request({ url, ...options, method: 'get' });

export const post = (url: string, options: AxiosRequestConfig) =>
  http.request({ url, ...options, method: 'post' });

export const put = (url: string, options: AxiosRequestConfig) =>
  http.request({ url, ...options, method: 'put' });

export const deleted = (url: string, options: AxiosRequestConfig) =>
  http.request({ url, ...options, method: 'delete' });

export default http;
