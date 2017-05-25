import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter, Route, Link} from 'react-router-dom';
import Index from './index/index.js';



ReactDom.render((
  <HashRouter>
    <Route path="/" component={Index}>
    </Route>
  </HashRouter>
), document.querySelector('#view'));
