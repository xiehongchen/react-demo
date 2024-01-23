/*
 * @Author: liaozhaozhou liaozhaozhou@ecyao.com
 * @Date: 2024-01-22 11:23:42
 * @LastEditors: xiehongchen 1754581057@qq.com
 * @LastEditTime: 2024-01-23 14:40:01
 * @FilePath: /react-demo/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Route, Routes } from "react-router-dom";

import Login from "@/pages/Login";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Publish from "./pages/Publish";
import BaseLayout from "@/pages/base-layout";
import AuthRoute from "@/components/AuthRoute";
import { history, HistoryRouter } from "@/utils/history";

const App = () => {
  return (
    <HistoryRouter history={history}>
        <div className="App">
          <Routes>
            <Route path="/" element={
              <AuthRoute>
                <BaseLayout></BaseLayout>
              </AuthRoute>
            }>
              {/* 二级路由默认页面 */}
              <Route index element={<Home />} />
              <Route path="article" element={<Article />} />
              <Route path="publish" element={<Publish />} />
            </Route>
            <Route path="/login" element={<Login></Login>}></Route>
          </Routes>
        </div>
    </HistoryRouter>
  )
}

export default App

