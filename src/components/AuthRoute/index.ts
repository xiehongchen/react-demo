/*
 * @Author: liaozhaozhou liaozhaozhou@ecyao.com
 * @Date: 2024-01-22 15:37:47
 * @LastEditors: xiehongchen 1754581057@qq.com
 * @LastEditTime: 2024-01-22 15:51:35
 * @FilePath: /react-demo/src/components/AuthRoute/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 1. 判断token是否存在
// 2. 如果存在 直接正常渲染
// 3. 如果不存在 重定向到登录路由

// 高阶组件:把一个组件当成另外一个组件的参数传入 然后通过一定的判断 返回新的组件
import { getToken } from '@/utils'
import { Navigate } from 'react-router-dom'
import { ReactNode } from 'react';

interface AuthRouteProps {
  children: ReactNode;
}
function AuthRoute ({ children }: AuthRouteProps): JSX.Element {
  const isToken = getToken()
  return isToken ? <>{children}</> : <Navigate to="/login" replace />;
}

export { AuthRoute }