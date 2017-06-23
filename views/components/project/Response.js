import React from 'react';
import Reflux from 'reflux';

import { Row, Col, Card, Layout, Menu, Breadcrumb, Icon, Table, Collapse, Button, Input, Select, Checkbox, Popconfirm} from 'antd';

import Action from './action';
import Store from './store';


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

export default class Res extends Reflux.Component {
  constructor(props) {
    super(props);
    this.stores = [Store];
  }

  componentDidMount() {
  }

  drop(index) {
    // let reqHeadData = this.state.reqHeadData;
    // reqHeadData.splice(index, 1);
    // Action.setKeyValue('reqHeadData', reqHeadData);
  }

  add() {
    // let reqHeadData = this.state.reqHeadData;
    // let newData = {
    //   key: reqHeadData.length,
    //   arg: '',
    //   des: '',
    // };
    // Action.setKeyValue('reqHeadData', reqHeadData.concat([newData]));
  }

  render() {
    return (
      <div>
        <Row className='api-title'>
          <h2>Request Headers</h2>
        </Row>
        <Row>
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
        </Row>
      </div>
    );
  };
}
