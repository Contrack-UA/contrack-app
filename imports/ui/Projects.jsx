import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Matriz from './Matriz.jsx';
import Footer from './Footer.jsx';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import axios from 'axios';

// Project component
export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue:'',
      page:1,
      pageL:[]
    }
    if(this.state.pageL.length === 0)
    {
      this.retrievePage(1);
    }
  }

  //Search form change handler
  handleChange(e){
    this.setState({searchValue: e.target.value});
  }

  //Page retriever
  retrievePage(i){
    axios.get("http://datos.colombiacompra.gov.co:8000/releases/?page="+i, {
    }).then(response => {
        console.log(response);
        if (response.data === null) {
            alert("no hay contratos para esta pagina");
        }else{
            //los proyectos estan en releases
            var list = response.data.releases;
            this.setState({pageL:list,page:i});
        }
    });
  }

  render() {
    console.log('enter projects');
    return (
      <div>
      <br/>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <form>
              <FormGroup controlId="formBasicText">
                <ControlLabel>Busca un contrato</ControlLabel>
                <FormControl type="text" value={this.state.searchValue} placeholder="IDContrato" onChange={this.handleChange}/>
              </FormGroup>
            </form>
          </div>
        </div>
        <br/>
        <div className="row" id="matrizComponent">
          <div className="col-md-12" id='jumbo'>
          <Matriz lista={this.state.pageL} />
          </div>
        </div>
        <br/><br/>
        <Footer page={this.state.page} changePage={this.retrievePage.bind(this)} />
      </div>
    );
  }
}
