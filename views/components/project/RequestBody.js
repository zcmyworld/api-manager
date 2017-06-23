import React from 'react';
import Reflux from 'reflux';

import { Row, Col, Card, Layout, Menu, Breadcrumb, Icon, Table, Collapse, Button, Input, Select, Checkbox, Popconfirm} from 'antd';

import Action from './action';
import Store from './store';

export default class RequestBody extends Reflux.Component {
  constructor(props) {
    super(props);
    this.stores = [Store];
  }

  componentDidMount() {
  }

  drop(index) {
    let reqBodyData = this.state.reqBodyData;
    reqBodyData.splice(index, 1);
    Action.setKeyValue('reqBodyData', reqBodyData);
  }

  add() {
    let reqBodyData = this.state.reqBodyData;
    let newData = {
      key: reqBodyData.length,
      arg: '',
      des: '',
    };
    Action.setKeyValue('reqBodyData', reqBodyData.concat([newData]));
  }

  render() {
    let REQ_BODY_COLUMN = [
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
    if (this.state.EDIT_MODE) {
      REQ_BODY_COLUMN.push({
        title: 'operation',
        dataIndex: 'operation',
        key: 'operation',
        render: (text, record, index) => {
          return (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.drop(index) }>
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
          {
            this.state.EDIT_MODE ?
              <div>
                <Button className="editable-add-btn" onClick={this.add.bind(this) }>Add</Button>
              </div>
              : ''
          }
          <Table
            dataSource={this.state.reqBodyData}
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
