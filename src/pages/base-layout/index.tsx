/*
 * @Author: xiehongchen 1754581057@qq.com
 * @Date: 2024-01-22 15:49:57
 * @LastEditors: xiehongchen 1754581057@qq.com
 * @LastEditTime: 2024-01-23 12:03:43
 * @FilePath: /react-demo/src/pages/base-layout/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Layout, Menu, Popconfirm } from "antd"
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import './index.scss'
import type { MenuProps } from 'antd';
import { Link, Outlet } from "react-router-dom";
const { Header, Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem(<Link to="/">数据概览</Link>, '1', <HomeOutlined />),
  getItem(<Link to="/article">内容管理</Link>, '2', <DiffOutlined />),
  getItem(<Link to="/publish">发布文章</Link>, '3', <EditOutlined />)
]
const BaseLayout = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click', e)
  }
  return (
    <Layout>
      <Header className="header">
        <div className="logo"></div>
        <div className="user-info">
          <span className="user-name">user.name</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消">
              <LogoutOutlined />退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu onClick={onClick} mode="inline" theme="light" defaultSelectedKeys={['1']} 
          style={{ height: '100%', borderRight: 0 }} items={items}>
          </Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}><Outlet /></Layout>
      </Layout>
    </Layout>
  )
}

export default BaseLayout