import React from 'react';
import Reflux from 'reflux';
import ReactMixin from 'react-mixin';

import { Layout, Menu, Breadcrumb } from 'antd';
let { Header, Content, Footer } = Layout;



let Actions = Reflux.createActions(['list']);

class Store extends Reflux.Store {
  constructor() {
    super();
    this.state = {
      hello: 1
    }
    this.listenables = Actions;
  }

  onList() {
    console.log('onList')
    this.setState({
      hello: 2
    })
  }
}

export default class Index extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.store = Store;
    setTimeout(function () {
      console.log("time!");
      Actions.list();
    }, 3000)
  }
  render() {
    return (
      <div>
        <div>{this.state.hello}</div>
      </div>
    );
  };
}
