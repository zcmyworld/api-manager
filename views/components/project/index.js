import React from 'react';
import Reflux from 'reflux';
import ReactMixin from 'react-mixin';

import { HashRouter, Route, Link } from 'react-router-dom';

import { Row, Col, Card, Layout, Menu, Breadcrumb, Icon, Table, Collapse, Button } from 'antd';
const { Header, Content, Footer } = Layout;

const SubMenu = Menu.SubMenu;
import Action from './action';
import Store from './store';

const REQ_BODY_COLUMN = [
  {
    title: '参数',
    dataIndex: 'arg',
    key: 'arg'
  }, {
    title: '说明',
    dataIndex: 'des',
    key: 'des',
  }, {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
  }, {
    title: '可选',
    dataIndex: 'optional',
    key: 'optional'

  }, {
    title: '默认值',
    dataIndex: 'defVal',
    key: 'defVal',
  }
];

const REQ_HEADER_COLUMN = [
  {
    title: '参数',
    dataIndex: 'arg',
    key: 'arg'
  }, {
    title: '说明',
    dataIndex: 'des',
    key: 'des',
  }, {
    title: '可选',
    dataIndex: 'optional',
    key: 'optional'

  }, {
    title: '默认值',
    dataIndex: 'defVal',
    key: 'defVal',
  }
];


const RES_HEADER_COLUMN = [
  {
    title: '参数',
    dataIndex: 'arg',
    key: 'arg'
  }, {
    title: '说明',
    dataIndex: 'des',
    key: 'des',
  }
];






export default class Index extends Reflux.Component {
  constructor(props) {
    super(props);
    this.stores = [Store];

  }

  componentDidMount() {
    Action.info(1);
    Action.menu(1);
  }

  render() {
    if (!this.state.project || !this.state.menu) {
      return null;
    }
    let reqHeadData = [];
    this.state.project.reqHead.map((item, idx) => {
      reqHeadData.push({
        key: idx,
        arg: item.arg,
        des: item.des
      })
    })
    let reqBodyData = []
    this.state.project.reqBody.map((item, idx) => {
      reqBodyData.push({
        key: idx,
        arg: item.arg,
        type: item.type,
        des: item.des,
        defVal: item.defVal,
        optional: item.optional
      })
    })

    return (
      <div>
        <Breadcrumb
          style={{ margin: '12px 24px' }}
          routes={[{ breadcrumbName: 'Home', name: 'home', path: '/projects' }, { breadcrumbName: '项目名称', path: '/123' }]}/>
        <Row style={{ background: '#fff', padding: 24, minHeight: 1080, paddingBottom: 100 }}>
          <Col span={3}>
            <Menu
              theme='Light'
              defaultOpenKeys={['sub1']}
              mode="inline"
              style={{ 'marginLeft': '-24px' }}
              >
              {
                this.state.menu.map((item, idx) => {
                  return (
                    <SubMenu key={idx} title={<span><span>{item.name}</span></span>}>
                      {
                        item.childs.map((child_item, child_idx) => {
                          return (
                            <Menu.Item key={idx.toString() + child_idx.toString() }>{child_item.name}</Menu.Item>
                          );
                        })
                      }
                    </SubMenu>
                  )
                })

              }
            </Menu>
          </Col>
          <Col span={21}>
            <div style={{ 'marginLeft': '30px' }}>
              <Row>
                <Col style={{ 'float': 'left' }}><h1>{this.state.project.title}</h1></Col>
                <Col style={{ 'float': 'left' }}>
                  <Button type="primary">Edit</Button>
                </Col>
                <Col style={{ 'float': 'right' }}><Button type="primary" size="large">mock</Button></Col>
              </Row>
              <Row>
                <div>{this.state.project.des}</div>
              </Row>
              <Row  className='api-title'>
                <h2>调用地址: {this.state.project.route}</h2>
              </Row>
              <Row className='api-title'>
                <h2>调用方式: {this.state.project.method}</h2>
              </Row>
              <Row className='api-title'>
                <h2>Request Headers</h2>
              </Row>
              <Row>
                <Table
                  dataSource={reqHeadData}
                  columns={REQ_HEADER_COLUMN}
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
                  dataSource={reqBodyData}
                  columns={REQ_BODY_COLUMN}
                  bordered
                  size='small'
                  pagination={false}
                  />
              </Row>
              <Row className='api-title'>
                <h2>Response</h2>
              </Row>
              {
                this.state.project.res.map((item, idx) => {
                  let resHeadData = [];
                  item.header.map((item, idx) => {
                    resHeadData.push({
                      key: idx,
                      arg: item.arg,
                      des: item.des
                    })
                  })

                  return (
                    <div key={idx}>
                      <Row className='api-title'>
                        <h2>{item.type}</h2>
                      </Row>
                      <Row className='api-title'>
                        <h2>Response Header</h2>
                      </Row>
                      <Row>
                        <Table
                          dataSource={resHeadData}
                          columns={RES_HEADER_COLUMN}
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
                          {JSON.stringify(item.body, null, 2) }
                        </pre>
                      </Row>

                    </div>

                  )
                })
              }

            </div>
          </Col>
        </Row>
      </div>
    );
  };
}
