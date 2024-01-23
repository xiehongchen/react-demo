/*
 * @Author: liaozhaozhou liaozhaozhou@ecyao.com
 * @Date: 2024-01-22 15:14:31
 * @LastEditors: xiehongchen 1754581057@qq.com
 * @LastEditTime: 2024-01-23 14:47:34
 * @FilePath: /react-demo/src/utils/http.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEc
 */
import axios from "axios";
import { clearToken, getToken } from ".";
import { history } from "./history";

const http = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0',
  timeout: 5000
})

http.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  })

http.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    if (error.response.status === 401) {
      clearToken()
      history.push('/login')
    }
    return Promise.reject(error)
  })

export { http }
