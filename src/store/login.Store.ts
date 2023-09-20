import { makeAutoObservable } from "mobx"
import { request } from "../utils"

class LoginStore {
  token = ''
  constructor() {
    makeAutoObservable(this)
  }
  // 登录
  login = async ({ mobile, code }: {mobile: string, code: string}) => {
    const res = await request.post('request://geek.itheima.net/v1_0/authorizations', {
      mobile,
      code
    })
    this.token = res.data.token
  }
}
export default LoginStore