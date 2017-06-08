import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom';

import { Row, Col, Card, Layout, Menu, Breadcrumb } from 'antd';
let { Header, Content, Footer } = Layout;

ReactDom.render((
  <Layout className="layout">
    <Header id="header" style={{ 'background': '#fff', 'borderBottom': '1px solid #e9e9e9', 'fontSize': '16px' }}>
      <div className="amr-row">
        <Row>
          <Col span={4} style={{'textAlign': 'center'}}>Logo</Col>
          <Col span={20}>
            <div style={{ 'float': 'left', 'width': '200px', 'height': '64px' }}>
              <div style={{'height': '30px', 'lineHeight': '30px', 'marginTop': '18px', 'borderLeft': '1px solid #e9e9e9'}}>
                <input
                  style={{ 'lineHeight': '20px','marginLeft': '30px', 'borderWidth': '0',  'borderBottom': '1px solid #e9e9e9', 'outline': 'none' }}
                  placeholder='搜索 ...'
                />
              </div>
            </div>
            <div style={{'float': 'right'}}>
              <Menu
                mode="horizontal"
                style={{ lineHeight: '62px', 'borderBottom': 'none'}}
              >
                <Menu.Item key="project">项目</Menu.Item>
                <Menu.Item key="user">用户</Menu.Item>
                <Menu.Item key="system">系统</Menu.Item>
              </Menu>
            </div>
          </Col>
        </Row>
      </div>
    </Header>
  </Layout>
), document.querySelector('#view'));
