import Reflux from 'reflux';
import Action from './action';

import Service from '../../services/Project';

export default class Store extends Reflux.Store {
  constructor() {
    super();
    this.listenables = Action;
  }

  onInfo(projectId) {
    Service.info(projectId).then((project) => {
      let reqHeadData = [];
      project.reqHead.map((item, idx) => {
        reqHeadData.push({
          key: idx,
          arg: item.arg,
          des: item.des
        })
      })

      let reqBodyData = []
      project.reqBody.map((item, idx) => {
        reqBodyData.push({
          key: idx,
          arg: item.arg,
          type: item.type,
          des: item.des,
          defVal: item.defVal,
          optional: item.optional
        })
      })

      this.setState({
        project: project,
        reqHeadData: reqHeadData,
        reqBodyData: reqBodyData,
        EDIT_MODE: true
      })
    })
  }

  onMenu(projectId) {
    Service.menu(projectId).then((menu) => {
      this.setState({
        menu: menu
      })
    })
  }

  onSetKeyValue(key, value) {
    let obj = {};
    obj[key] = value;
    this.setState(obj)
  }
}