/*
 * @Author: liaozhaozhou liaozhaozhou@ecyao.com
 * @Date: 2024-01-22 15:14:31
 * @LastEditors: liaozhaozhou liaozhaozhou@ecyao.com
 * @LastEditTime: 2024-01-22 15:17:21
 * @FilePath: /react-demo/src/utils/http.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEc
 */
import axios from "axios";
import { getToken } from ".";

const http = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0',
  timeout: 5000
})

http.interceptors.request.use((config) => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

http.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error)
})

export {http}
