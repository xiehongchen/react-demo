import { makeAutoObservable } from "mobx";
import { setToken, getToken, http, clearToken } from '@/utils'
interface loginType {
  mobile: string
  code: string
}

class LoginStore {
  token = getToken() || ''
  constructor() {
    makeAutoObservable(this)
  }

  login = async ({ mobile, code }: loginType) => {
    await http.post('http://geek.itheima.net/v1_0/authorizations', {
      mobile,
      code
    }).then(res => {
      this.token = res.data.token
      setToken(res.data.token)
    })
  }

  loginOut = () => {
    this.token = ''
    clearToken()
  }
}

export default LoginStore