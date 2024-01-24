/*
 * @Author: xiehongchen 1754581057@qq.com
 * @Date: 2024-01-23 11:40:11
 * @LastEditors: xiehongchen 1754581057@qq.com
 * @LastEditTime: 2024-01-24 10:19:46
 * @FilePath: /react-demo/src/pages/Article/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Link } from "react-router-dom"
import { Card, Breadcrumb, Form, Button, Radio, DatePicker, Select, Tag, Space, Table, Popconfirm } from 'antd'
import locale from "antd/es/date-picker/locale/zh_CN"
import img404 from '@/assets/hui.png'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useEffect, useState } from "react"
import { http } from "@/utils"
import { history } from "@/utils/history"

const { RangePicker } = DatePicker
const Article = () => {
  // 筛选功能
  const onSearch = (values: { status: number, channel: number, date: Date[] }) => {
    const { status, channel, date } = values
    const _params = {} as { status: number, channel: number, begin_pubdate: string, end_pubdate: string }
    _params.status = status
    if (channel) {
      _params.channel = channel
    }
    if (date) {
      _params.begin_pubdate = date[0].toISOString().split('T')[0];
      _params.end_pubdate = date[1].toISOString().split('T')[0];
    }
    setParams({
      ...params,
      ..._params
    })
    console.log(params, 'params')
  }
  // 获取文章列表
  const [articleList, setArticleList] = useState({
    list: [],
    count: 0
  })
  // 参数管理
  const [params, setParams] = useState({
    page: 1,
    per_page: 10
  })
  const pageChange = (page: number) => {
    setParams({
      ...params,
      page
    })
  }
  useEffect(() => {
    async function fetchArticleList() {
      const res = await http.get('/mp/articles', { params })
      const { results, total_count } = res.data
      setArticleList({
        list: results,
        count: total_count
      })
    }
    fetchArticleList()
  }, [params])
  // 获取频道列表
  const [channels, setChannels] = useState([])
  useEffect(() => {
    async function fetchChannels() {
      const res = await http.get('/channels')
      setChannels(res.data.channels)
    }
    fetchChannels()
  }, [])

  const delArticle = async (item: { id: string }) => {
    await http.delete(`/mp/article/${item.id}`)
    setParams({
      page: 1,
      per_page: 10
    })
  }

  // 表单结构
  const columns = [
    {
      title: '封面',
      dataIndex: 'cover',
      width: 120,
      render: (cover: string) => {
        return <img src={cover || img404} width={80} height={60} alt="" />
      }
    },
    {
      title: '标题',
      dataIndex: 'title',
      width: 220
    },
    {
      title: '状态',
      dataIndex: 'status',
      render: () => <Tag color="green">审核通过</Tag>
    },
    {
      title: '发布时间',
      dataIndex: 'pubdate'
    },
    {
      title: '阅读数',
      dataIndex: 'read_count'
    },
    {
      title: '评论数',
      dataIndex: 'comment_count'
    },
    {
      title: '点赞数',
      dataIndex: 'like_count'
    },
    {
      title: '操作',
      render: (data: any) => {
        return (
          <Space size="middle">
            <Button
              type="primary"
              shape="circle"
              icon={<EditOutlined />}
              onClick={() => history.push(`/publish?id=${data.id}`)}
            />
            <Popconfirm
              title="确认删除该条文章吗?"
              onConfirm={() => delArticle(data)}
              okText="确认"
              cancelText="取消"
            >
              <Button
                type="primary"
                danger
                shape="circle"
                icon={<DeleteOutlined />}
              />
            </Popconfirm>
          </Space>
        )
      }
    }
  ]

  return (
    <div>
      <Card title={
        <Breadcrumb separator=">" items={[
          {
            title: <Link to="/">首页</Link>
          },
          {
            title: '内容管理'
          }
        ]}></Breadcrumb>
      }>
        <Form initialValues={{ status: 0 }} onFinish={onSearch}>
          <Form.Item label="状态" name="status">
            <Radio.Group>
              <Radio value={0}>全部</Radio>
              <Radio value={1}>草稿</Radio>
              <Radio value={2}>待审核</Radio>
              <Radio value={3}>审核通过</Radio>
              <Radio value={4}>审核失败</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="频道" name="channel">
            <Select
              style={{ width: 120 }}
              options={channels.map((item: any) => ({ label: item.name, value: item.id }))}
            />
          </Form.Item>

          <Form.Item label="日期" name="date">
            {/* 传入locale属性 控制中文显示*/}
            <RangePicker locale={locale}></RangePicker>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ marginLeft: 80 }}>
              筛选
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Card title={`根据筛选条件共查询到 ${articleList.count} 条结果：`}>
        <Table rowKey="id" columns={columns} dataSource={articleList.list} pagination={{
          position: ['bottomCenter'],
          total: articleList.count,
          current: params.page,
          pageSize: params.per_page,
          onChange: pageChange
        }} />
      </Card>
    </div>
  )
}
export default Article