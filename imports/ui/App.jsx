import React, { Component } from 'react';
import Navigbar from './Navigbar';

// App component - represents the whole app
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: 'home',
      page:1,
      currentProject: 'prueba'
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <Navigbar />
        </div>
        <div className="row">
          <div className='col-md-1'></div>
          <div className='col-md-10'>
            {React.cloneElement(this.props.children, {...this.state})}
          </div>
          <div className='col-md-1'></div>
        </div>
      </div>
    );
  }
}
