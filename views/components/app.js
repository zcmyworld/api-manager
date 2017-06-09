import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom';

import { Row, Col, Card, Layout, Menu, Breadcrumb, Icon, Table, Collapse } from 'antd';
let { Header, Content, Footer } = Layout;

const SubMenu = Menu.SubMenu;
let Panel = Collapse.Panel;

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
};

const reqHeaderColumns = [
  {
    title: 'headerKey',
    dataIndex: 'headerKey',
    key: 'headerKey'
  }, {
    title: 'headerValue',
    dataIndex: 'headerValue',
    key: 'headerValue',
  }
];

const reqHeaderDataSource = [
  {
    key: '1',
    headerKey: 'userName',
    headerValue: 'userName',
  }, {
    key: '2',
    headerKey: 'userName',
    headerValue: 'userName',

  }
];

const columns = [
  {
    title: '参数',
    dataIndex: 'argument',
    key: 'argument'
  }, {
    title: '说明',
    dataIndex: 'description',
    key: 'description',
  }, {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
  }, {
    title: '默认值',
    dataIndex: 'defaultValue',
    key: 'defaultValue',
  }
];

const dataSource = [
  {
    key: '1',
    argument: 'userName',
    description: '用户名',
    type: 'string',
    defaultValue: '-'
  }, {
    key: '2',
    argument: 'password',
    description: '密码',
    type: 'string',
    defaultValue: '-'
  }
];


ReactDom.render((
  <Layout className="layout">
    <Header id="header" style={{ 'background': '#fff', 'borderBottom': '1px solid #e9e9e9', 'fontSize': '16px', 'padding': '0 74px' }}>
      <div className="amr-row">
        <Row>
          <Col span={3}>Api-Manger</Col>
          <Col span={21}>
            <div style={{ 'float': 'left', 'width': '200px', 'height': '64px' }}>
              <div style={{ 'height': '30px', 'lineHeight': '30px', 'marginTop': '18px', 'borderLeft': '1px solid #e9e9e9' }}>
                <input
                  style={{ 'lineHeight': '20px', 'marginLeft': '30px', 'borderWidth': '0', 'borderBottom': '1px solid #e9e9e9', 'outline': 'none' }}
                  placeholder='搜索 ...'
                  />
              </div>
            </div>
            <div style={{ 'float': 'right' }}>
              <Menu
                mode="horizontal"
                style={{ lineHeight: '62px', 'borderBottom': 'none' }}
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
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '12px 24px' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 1080 }}>
        <Col span={3}>
          <Menu
            theme='Light'
            defaultOpenKeys={['sub1']}
            mode="inline"
            style={{ 'marginLeft': '-24px' }}
            >
            <SubMenu key="sub1" title={<span><span>模块１</span></span>}>
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><span>模块２</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" title={<span><span>Navigation Three</span></span>}>
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </Col>
        <Col span={21}>
          <div style={{ 'height': '30px', 'lineHeight': '30px' }}>
            <div style={{ 'marginLeft': '30px' }}>
              <h1>用户列表</h1>
              <div>获取用户列表</div>
              <h2>调用地址: /hello/world</h2>
              <h2>调用方式: GET</h2>
              <h2>Request Headers</h2>
              <Table
                dataSource={dataSource}
                columns={columns}
                bordered
                size='small'
                pagination={false}
                />
              <h2>
                Request Body
              </h2>
              <Table
                dataSource={dataSource}
                columns={columns}
                bordered
                size='small'
                pagination={false}
                />
              <h2>Response</h2>
              <h2>正确返回</h2>
              <h2>Response Header</h2>
              <Table
                dataSource={dataSource}
                columns={columns}
                bordered
                size='small'
                pagination={false}
                />
              <pre>
                {'{'}{'\n'}
                {'  '}hello: 1{'\n'}
                {'  '}world: 1{'\n'}
                {'}'}
              </pre>
              <h2>错误返回</h2>
              <Table
                dataSource={dataSource}
                columns={columns}
                bordered
                size='small'
                pagination={false}
                />
              <pre>
                {'{'}{'\n'}
                {'  '}hello: 1{'\n'}
                {'  '}world: 1{'\n'}
                {'}'}
              </pre>
              <div>helloworld</div>
            </div>
          </div>
        </Col>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
  </Layout>
), document.querySelector('#view'));
