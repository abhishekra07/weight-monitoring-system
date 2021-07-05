import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  LineChartOutlined,
  HistoryOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

function Sidebar(props) {
  const { Sider } = Layout;

  return (
    <Sider trigger={null} collapsible collapsed={props.collapsed}>
      <div className="logo" />
      <Menu theme={props.theme} mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to={'/'}>Weight</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<LineChartOutlined />}>
          <Link to={'/graph'}>Graph</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<HistoryOutlined />}>
          <Link to={'/history'}>History</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default Sidebar;
