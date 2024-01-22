/*
 * @Author: liaozhaozhou liaozhaozhou@ecyao.com
 * @Date: 2024-01-22 11:23:42
 * @LastEditors: liaozhaozhou liaozhaozhou@ecyao.com
 * @LastEditTime: 2024-01-22 14:42:07
 * @FilePath: /react-demo/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout></Layout>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

