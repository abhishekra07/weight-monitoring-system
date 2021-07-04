import React, { useState } from 'react';
import { Line } from '@ant-design/charts';
import { Layout, Menu, Switch, Typography } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  CarryOutOutlined,
  LineChartOutlined,
  HistoryOutlined
} from '@ant-design/icons';


import "antd/dist/antd.css"; // this import is required for antd css
import './App.css';

function App() {

  const { Header, Sider, Content } = Layout;
  const { Title } = Typography;
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState('dark');

  const data = [
    { date: '26-06-2021', value: 54 },
    { date: '27-06-2021', value: 54.5 },
    { date: '28-06-2021', value: 53.8 },
    { date: '29-06-2021', value: 53.9 },
    { date: '30-06-2021', value: 53.5 },
    { date: '01-07-2021', value: 54.2 },
    { date: '02-07-2021', value: 54 },
    { date: '03-07-2021', value: 54.1 },
    { date: '04-07-2021', value: 54.7 },
  ];

  const config = {
    data,
    height: 400,
    xField: 'date',
    yField: 'value',
    meta: {
      value: {
        min: 53,
        max: 56,
        tickInterval: 1
      },
    },
    step : 5,
    point: {
      size: 3,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
  };

  function toggle(){
    setCollapsed(!collapsed);
  }

  // function changeTheme(){
  //   setTheme(theme === 'dark' ? 'light' : 'dark');
  //   console.log(theme);
  // }
  // <Switch
  //       checked={theme === 'dark'}
  //       onChange={changeTheme}
  //       checkedChildren="Dark"
  //       unCheckedChildren="Light"
  //     />
  return (
    <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme={theme} mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              Weight
            </Menu.Item>
            <Menu.Item key="2" icon={<LineChartOutlined />}>
              Graph
            </Menu.Item>
            <Menu.Item key="3" icon={<HistoryOutlined />}>
              History
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
            <Title className="title"> <CarryOutOutlined /> Weight Monitoring App</Title>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: '500px',
            }}
          >Content
          <Line {...config} />;
          </Content>
        </Layout>
      </Layout>
  );
}

export default App;
