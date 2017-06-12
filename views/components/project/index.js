import React from 'react';
import Reflux from 'reflux';
import ReactMixin from 'react-mixin';

import { HashRouter, Route, Link } from 'react-router-dom';

import { Row, Col, Card, Layout, Menu, Breadcrumb, Icon, Table, Collapse } from 'antd';
let { Header, Content, Footer } = Layout;

const SubMenu = Menu.SubMenu;

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

let Panel = Collapse.Panel;


const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
};
class Node extends Reflux.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <span>POST</span>
        <span>/pet</span>
        <span>这个接口的一些描述11</span>
      </div>
    );
  };
}

export default class Index extends Reflux.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      current: 'project'
    }
  }
  render() {
    return (
      <div>
        <Breadcrumb style={{ margin: '12px 24px' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Row style={{ background: '#fff', padding: 24, minHeight: 1080, paddingBottom: 100 }}>
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
            <div style={{ 'marginLeft': '30px' }}>
              <Row>
                <h1>用户列表</h1>
              </Row>
              <Row>
                <div>获取用户列表</div>
              </Row>
              <Row  className='api-title'>
                <h2>调用地址: /hello/world</h2>
              </Row>
              <Row className='api-title'>
                <h2>调用方式: GET</h2>
              </Row>
              <Row className='api-title'>
                <h2>Request Headers</h2>
              </Row>
              <Row>
                <Table
                  dataSource={dataSource}
                  columns={columns}
                  bordered
                  size='small'
                  pagination={false}
                  />
              </Row>
              <Row className='api-title'>
                <h2>
                  Request Body
                </h2>
              </Row>
              <Row>
                <Table
                  dataSource={dataSource}
                  columns={columns}
                  bordered
                  size='small'
                  pagination={false}
                  />
              </Row>
              <Row className='api-title'>
                <h2>Response</h2>
              </Row>
              <Row className='api-title'>
                <h2>正确返回</h2>
              </Row>
              <Row className='api-title'>
                <h2>Response Header</h2>
              </Row>
              <Row>
                <Table
                  dataSource={dataSource}
                  columns={columns}
                  bordered
                  size='small'
                  pagination={false}
                  />
              </Row>
              <Row className='api-title'>
                <h2>Response Body</h2>
              </Row>
              <Row>
                <pre>
                  {'{'}{'\n'}
                  {'  '}hello: 1{'\n'}
                  {'  '}world: 1{'\n'}
                  {'}'}
                </pre>
              </Row>
              <Row className='api-title'>
                <h2>错误返回</h2>
              </Row>
              <Row className='api-title'>
                <h2>Response Header</h2>
              </Row>
              <Row>
                <Table
                  dataSource={dataSource}
                  columns={columns}
                  bordered
                  size='small'
                  pagination={false}
                  />
              </Row>
              <Row className='api-title'>
                <h2>Response Body</h2>
              </Row>
              <Row>
                <pre>
                  {'{'}{'\n'}
                  {'  '}hello: 1{'\n'}
                  {'  '}world: 1{'\n'}
                  {'}'}
                </pre>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  };
}
