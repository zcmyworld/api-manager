import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter, Route, Link} from 'react-router-dom';

import {Row, Col, Card, Layout, Menu, Breadcrumb } from 'antd';
let { Header, Content, Footer } = Layout;

import ProjectList from './project_list/index.js';

import Project from './project/index.js';


ReactDom.render((
  <Layout className="layout">
    <Header>
      <Menu
        mode="horizontal"
        theme="dark"
        style={{ lineHeight: '64px' }}
        >
        <Menu.Item key="project">Project</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '12px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
        <HashRouter>
          <div>
            <Route exact path="/project_list" component={ProjectList}></Route>
            <Route exact path="/project" component={Project}></Route>
          </div>
        </HashRouter>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
  </Layout>
), document.querySelector('#view'));
