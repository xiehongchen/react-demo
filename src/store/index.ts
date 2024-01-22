/*
 * @Author: liaozhaozhou liaozhaozhou@ecyao.com
 * @Date: 2024-01-22 15:26:10
 * @LastEditors: liaozhaozhou liaozhaozhou@ecyao.com
 * @LastEditTime: 2024-01-22 15:28:10
 * @FilePath: /react-demo/src/store/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react"
import LoginStore from './login.store'

class RootStore {
  loginStore: LoginStore
  // 组合模块
  constructor() {
    this.loginStore = new LoginStore()
  }
}
// 导入useStore方法供组件使用数据
const StoresContext = React.createContext(new RootStore())
export const useStore = () => React.useContext(StoresContext)