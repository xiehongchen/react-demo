import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'

function echartInit(node: HTMLElement, xData: object, sData: object, title: string) {
  const myChart = echarts.init(node)
  myChart.setOption({
    title: {
      text: title
    },
    tooltip: {},
    xAxis: {
      data: xData
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: sData
      }
    ]
  })
}
interface barType {
  style: object
  xData: object
  sData: object
  title: string
}
function Bar({ style, xData, sData, title }: barType) {
  const nodeRef = useRef(null)
  useEffect(() => {
    echartInit(nodeRef.current!, xData, sData, title)
  }, [xData, sData])

  return (
    <div ref={nodeRef} style={style}></div>
  )
}

export default Bar