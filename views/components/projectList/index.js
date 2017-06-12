import {Row, Col, Card, Layout, Menu, Breadcrumb } from 'antd';
import React from 'react';
import Reflux from 'reflux';
import ReactMixin from 'react-mixin';
import { HashRouter, Route, Link } from 'react-router-dom';
let { Header, Content, Footer } = Layout;

export default class Index extends Reflux.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 'project'
    }
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <Breadcrumb style={{ margin: '12px 24px' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Row style={{ background: '#fff', padding: 24, minHeight: 1080, paddingBottom: 100 }}>
          <Row gutter={16}>
            <Col span={4} >
              <Card >
                <h1>课程工具</h1>
                <p>更新时间</p>
                <p>2017-1-2 13: 24</p>
              </Card>
            </Col>
            <Col span={4} >
              <Card >
                <h1><Link to='/project'>用户系统</Link></h1>
                <p>更新时间</p>
                <p>2017-1-2 13: 24</p>
              </Card>
            </Col>
          </Row>
        </Row>
      </div>
    );
  };
}
