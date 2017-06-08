import {Row, Col, Collapse} from 'antd';
import React from 'react';
import Reflux from 'reflux';
import ReactMixin from 'react-mixin';

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
    this.state = {
      current: 'project'
    }
  }
  render() {
    return (
      <Collapse bordered={false} defaultActiveKey={['1']}>
        <Panel header={<Node/>} key="1" style={customPanelStyle}>
          <Row className="project-api-des">
            <Col span={4} className="project-api-des-title">Description</Col>
            <Col span={20} className="project-api-des-content">
              用于请求Pet对象, 描述很长很长描述很长很长描述很长很长描述很长很长描述很长很长描述很长很长描述很长很长
              用于请求Pet对象, 描述很长很长描述很长很长描述很长很长描述很长很长描述很长很长描述很长很长描述很长很长
              用于请求Pet对象, 描述很长很长描述很长很长描述很长很长描述很长很长描述很长很长描述很长很长描述很长很长
              用于请求Pet对象, 描述很长很长描述很长很长描述很长很长描述很长很长描述很长很长描述很长很长描述很长很长
              用于请求Pet对象, 描述很长很长描述很长很长描述很长很长描述很长很长描述很长很长描述很长很长描述很长很长
              用于请求Pet对象, 描述很长很长描述很长很长描述很长很长描述很长很长描述很长很长描述很长很长描述很长很长
              用于请求Pet对象, 描述很长很长描述很长很长描述很长很长描述很长很长描述很长很长描述很长很长描述很长很长
            </Col>
          </Row>
          <Row className="project-api-row-title">Request</Row>

          <Row>
            <Col span={4} className="project-api-header-title">header</Col>
            <Col span={20} className="project-api-header-title">
              Cache-Control: no-cache
            </Col>
          </Row>

          <Row>
            <Col span={4} className="project-api-request-title">body</Col>
            <Col span={20} className="project-api-request-title">
              <pre>
                {'{'}{'\n'}
                {'  '}hello: 1{'\n'}
                {'  '}world: 1{'\n'}
                {'}'}
              </pre>
            </Col>
          </Row>

          <Row className="project-api-row-title">Response</Row>
          <Row>
            <Col span={4} className="project-api-header-title">header</Col>
            <Col span={20} className="project-api-header-title">
              Cache-Control: no-cache
            </Col>
          </Row>

          <Row className="project-api-row-title">Body</Row>

          <Row>
            <Col span={4} className="project-api-reponse-title">200</Col>
            <Col span={20} className="project-api-reponse-content">
              <pre>
                {'{'}{'\n'}
                {'  '}hello: 1{'\n'}
                {'  '}world: 1{'\n'}
                {'}'}
              </pre>
            </Col>
          </Row>
          <Row>
            <Col span={4} className="project-api-reponse-title">404</Col>
            <Col span={20} className="project-api-reponse-content">
              <pre>
                {'{'}{'\n'}
                {'  '}hello: 1{'\n'}
                {'  '}world: 1{'\n'}
                {'}'}
              </pre>
            </Col>
          </Row>
          <Row>
            <Col span={4} className="project-api-reponse-title">500</Col>
            <Col span={20} className="project-api-reponse-content">
              <pre>
                {'{'}{'\n'}
                {'  '}hello: 1{'\n'}
                {'  '}world: 1{'\n'}
                {'}'}
              </pre>
            </Col>
          </Row>
        </Panel>
      </Collapse>
    );
  };
}
