import React from 'react';
import Reflux from 'reflux';

import { Row, Col, Card, Layout, Menu, Breadcrumb, Icon, Table, Collapse, Button, Input, Select, Checkbox, Popconfirm} from 'antd';

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

export default class RequestBody extends Reflux.Component {
  constructor(props) {
    super(props);
    this.stores = [Store];
  }

  componentDidMount() {
  }

  handleReqHeadTablDrop(index) {
    let reqHeadData = this.state.reqHeadData;
    reqHeadData.splice(index, 1);
    Action.setKeyValue('reqHeadData', reqHeadData);
  }

  handleReqHeadTablAdd() {
    let reqHeadData = this.state.reqHeadData;
    let newData = {
      key: reqHeadData.length,
      arg: '',
      des: '',
    };
    Action.setKeyValue('reqHeadData', reqHeadData.concat([newData]));
  }

  render() {
    let REQ_HEADER_COLUMN = [
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
        key: 'optional',
        render: text => <Checkbox />,
      }, {
        title: '默认值',
        dataIndex: 'defVal',
        key: 'defVal',
        render: text => '-',
      }
    ];

    if (this.state.EDIT_MODE) {
      REQ_HEADER_COLUMN.push({
        title: 'operation',
        dataIndex: 'operation',
        key: 'operation',
        render: (text, record, index) => {
          return (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleReqHeadTablDrop(index) }>
              <a href="#">Delete</a>
            </Popconfirm>
          )
        }
      });
    }
    return (
      <div>
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
      </div>
    );
  };
}
