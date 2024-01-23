/*
 * @Author: xiehongchen 1754581057@qq.com
 * @Date: 2024-01-23 12:10:10
 * @LastEditors: xiehongchen 1754581057@qq.com
 * @LastEditTime: 2024-01-23 12:10:17
 * @FilePath: /react-demo/src/store/user.Store.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { makeAutoObservable } from "mobx";
import { http } from "@/utils";
interface userType {
  name: string
}
class UserStore {
  userInfo = {} as userType
  constructor() {
    makeAutoObservable(this)
  }
  async getUserInfo() {
    const res = await http.get('/user/profile')
    this.userInfo = res.data
  }
}

export default UserStore