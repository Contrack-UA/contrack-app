import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';

import App from '../imports/ui/App.jsx';
import HomePage from '../imports/ui/HomePage.jsx';
import Projects from '../imports/ui/Projects.jsx';

Meteor.startup(() => {
  render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={HomePage} />
      <Route path= 'contratos' component={Projects}/>
    </Route>
  </Router>, document.getElementById('render-target')
);
});
