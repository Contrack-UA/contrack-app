import React, {Component, PropTypes} from 'react';
import {Well, Thumbnail, Pagination} from 'react-bootstrap';
//import secop1 from '../data/secop1.json';


export default class Contracts1 extends Component {

  constructor(props){
    super(props);
    this.state = {
      activePage: 1
    }
  }

  handleSelect(eventKey) {
   this.setState({
     activePage: eventKey
   });
 }

  render(){
    return(
      <div>
        <div className="row head green">
          <h1>Contratos del SECOP I</h1>
        </div>
        <div className="scale head bold center">
          <Thumbnail>
            <div className="row">
          <div className="col-md-3">
            <h2>
              Escala:
              {' '}
            </h2>
          </div>
          <div className="col-md-2">
            <h2>
              <i className="fa fa-times superbad" aria-hidden="true"></i>
            </h2>
          </div>
          <div className="col-md-2">
            <h2>
              <i className="fa fa-circle superbad" aria-hidden="true"></i>
              {' '}
              <i className="fa fa-circle verybad" aria-hidden="true"></i>
              {' '}
              <i className="fa fa-circle bad" aria-hidden="true"></i>
              {' '}
              <i className="fa fa-circle good" aria-hidden="true"></i>
              {' '}
              <i className="fa fa-circle verygood" aria-hidden="true"></i>
            </h2>
          </div>
          <div className="col-md-2">
            <h2>
              <i className="fa fa-check verygood" aria-hidden="true"></i>
            </h2>
          </div>
          <div className="col-md-3"></div>
          </div>
        </Thumbnail>
        </div>
        <div className="row contratos">

        </div>
        <div className="paginacion center">
          <Pagination
            prev
            next
            first
            last
            ellipsis
            boundaryLinks
            items={20}
            maxButtons={5}
            activePage={this.state.activePage}
            onSelect={this.handleSelect.bind(this)}
          />
        </div>
      </div>
    );
  }

}
