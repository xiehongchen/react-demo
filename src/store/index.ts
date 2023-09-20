import React from "react"
import LoginStore from "./login.Store"

class RootStore {
  loginStore: LoginStore; // 声明 LoginStore 属性的类型

  constructor() {
    this.loginStore = new LoginStore()
  }
}

const StoreContext = React.createContext(new RootStore())
export const useStore = () => React.useContext(StoreContext)