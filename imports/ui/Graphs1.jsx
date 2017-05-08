import React, {Component, PropTypes} from 'react';
import {Well} from 'react-bootstrap';


export default class Graphs1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      graph: 0,
    }
  }

  changeGraph(g) {
    this.setState({
      graph: g,
    });
  }

  renderGraph() {
    if (this.state.graph === 0) {
      return (
        <div className="scale bod bold center">
          <h3>Sospechas Encontradas <strong> vs. </strong> Valor del Contrato</h3>
          <img src="https://68.media.tumblr.com/807691bdf4aa39562f52e4f4a522a2c7/tumblr_onygaestxV1w7ypfio1_1280.png" className="graph center"/>
        </div>
      )
    } else if (this.state.graph === 1) {
      return (
        <div className="scale bod bold center">
          <h3>1 <strong> vs. </strong> 1</h3>
        </div>
      )
    } else {
      return (
        <div className="scale bod bold center">
          <h3>2 <strong> vs. </strong> 2</h3>
        </div>
      )
    }

  }

  render(){
    return(
      <div className="container">
        <div className="row head green">
          <h1>Gráficas del SECOP I</h1>
        </div>
        <div className="center btn-group">
          <button type="button" className="btn btn-default" onClick={() => {this.changeGraph(0)}}>
            Sospechas vs. Valor
          </button>
          <button type="button" className="btn btn-default" onClick={() => {this.changeGraph(1)}}>
            Contratos más caros
          </button>
          <button type="button" className="btn btn-default" onClick={() => {this.changeGraph(2)}}>
            Otra cosa
          </button>
        </div>
        <div>
        {
          this.renderGraph()
        }
        </div>
      </div>
    );
  }

}
