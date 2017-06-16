import Reflux from 'reflux';
import Action from './action';

import Service from '../../services/Project';

export default class Store extends Reflux.Store {
  constructor() {
    super();
    this.listenables = Action;
  }

  onInfo(projectId) {
    Service.Info(projectId).then((project) => {
      this.setState({
        project: project
      })
    })
  }
}