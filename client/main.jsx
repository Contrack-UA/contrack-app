import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';

import App from '../imports/ui/App.jsx';
import HomePage from '../imports/ui/HomePage.jsx';
import Projects from '../imports/ui/Projects.jsx';
import Contracts1 from '../imports/ui/Contracts1.jsx';
import Graphs1 from '../imports/ui/Graphs1.jsx';
import Contracts2 from '../imports/ui/Contracts2.jsx';
import Graphs2 from '../imports/ui/Graphs2.jsx';

Meteor.startup(() => {
  render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={HomePage} />
      <Route path= 'contratos' component={Projects}/>
      <Route path='secop1/contratos' component={Contracts1}/>
      <Route path='secop1/graf' component={Graphs1}/>
      <Route path='secop2/contratos' component={Contracts2}/>
      <Route path='secop2/graf' component={Graphs2}/>
    </Route>
  </Router>, document.getElementById('render-target')
);
});
