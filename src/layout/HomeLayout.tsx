import './HomeLayout.css';

import { DollarCircleOutlined, MenuOutlined } from '@ant-design/icons';
import { Button, Drawer, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import { AppRouter } from '../AppRouter';
import { AppRoutes } from '../appRoutes';
import { Helmet } from 'react-helmet-async';
import { Loading } from '../components/Loading/Loading';

const { Content, Header } = Layout;
const { SubMenu } = Menu;

const MIN_WAGE_TITLE = 'Minimum Wage Data';

export interface HomeLayoutProps {}

export const HomeLayout: React.FC<HomeLayoutProps> = () => {
  const [collapsed, setCollapsed] = useState(false);
  const selectedTab = '1';
  const title = MIN_WAGE_TITLE;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Helmet>
      <Layout style={{ minHeight: '100vh' }}>
        <Drawer
          bodyStyle={{ backgroundColor: '#001628' }}
          headerStyle={{
            border: 'none',
          }}
          title="Pages"
          width={250}
          placement="left"
          visible={collapsed}
          onClose={() => setCollapsed(false)}
        >
          <Menu theme="dark" selectedKeys={[selectedTab]} mode="inline">
            <SubMenu
              key="1"
              icon={<DollarCircleOutlined />}
              title={MIN_WAGE_TITLE}
            >
              <Menu.Item key="final-vis">
                <Link to={AppRoutes.FinalVis}>Minimum Wage Visualization</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Drawer>
        <Layout>
          <Header>
            <Button type="primary" onClick={() => setCollapsed(!collapsed)}>
              <MenuOutlined />
            </Button>
          </Header>
          <React.Suspense fallback={<Loading />}>
            <Content style={{ margin: '16px 16px' }}>
              <AppRouter />
            </Content>
          </React.Suspense>
        </Layout>
      </Layout>
    </>
  );
};
