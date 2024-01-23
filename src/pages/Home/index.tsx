/*
 * @Author: xiehongchen 1754581057@qq.com
 * @Date: 2024-01-23 11:39:20
 * @LastEditors: xiehongchen 1754581057@qq.com
 * @LastEditTime: 2024-01-23 15:02:16
 * @FilePath: /react-demo/src/pages/Home/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Bar from "@/components/Bar"
import './index.scss'
const Home = () => {
  return (
    <div className="home">
      <Bar 
        style={{width: '500px', height: '400px'}}
        xData={['vue', 'angular', 'react']}
        sData={[50, 60, 70]}
        title="三大框架满意度" />
      <Bar
        style={{ width: '500px', height: '400px' }}
        xData={['vue', 'angular', 'react']}
        sData={[50, 60, 70]}
        title='三大框架使用度' />
    </div>
  )
}

export default Home