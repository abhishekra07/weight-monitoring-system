import React, { useState } from 'react';
import { Layout, Typography } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  CarryOutOutlined,
} from '@ant-design/icons';

import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';

import Sidebar from './component/Sidebar';
import Main from './component/Main';
import Graph from './component/Graph';
import History from './component/History';

import "antd/dist/antd.css"; // this import is required for antd css
import './App.css';

function App() {

  const { Header, Content } = Layout;
  const { Title } = Typography;
  const [collapsed, setCollapsed] = useState(false);
  // const [theme, setTheme] = useState('dark');

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
    <Router>
    <Layout>
        <Sidebar theme="dark" collapsed={collapsed} />
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
          >
          <Switch>
              <Route exact path='/' component={Main} />
              <Route path='/graph' component={Graph} />
              <Route path='/history' component={History} />
          </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
