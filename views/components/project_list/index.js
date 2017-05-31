import {Row, Col, Card, Layout, Menu, Breadcrumb } from 'antd';
import React from 'react';
import Reflux from 'reflux';
import ReactMixin from 'react-mixin';
let { Header, Content, Footer } = Layout;

export default class Index extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'project'
    }
  }
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={4} >
            <Card >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={4} >
            <Card >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
      </div>
    );
  };
}
