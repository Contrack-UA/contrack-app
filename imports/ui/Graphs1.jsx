import React, {Component, PropTypes} from 'react';
import {Well} from 'react-bootstrap';
import {BarChart} from 'react-easy-chart';
import top20 from '../data/s1top20.json';


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
        <div>
          <div style={{display: 'inline-block'}}>
            <BarChart
              width={1200}
              height={400}
              data={top20}
              margin={{top: 220, left: 100, right: 100, bottom: 50}}
              clickHandler={(d) => this.setState({dataDisplay: `${d.x}, tiene un valor de $ ${d.y}`})}
            />
          </div>
          <div className="bod" style={{display: 'inline-block', verticalAlign: 'top', paddingLeft: '20px'}}>
            <h2>
              {this.state.dataDisplay ? this.state.dataDisplay : 'Haz click en una barra para ver la información'}
            </h2>
          </div>
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
          <h1 className="col-md-4">Gráficas del SECOP I</h1>
          <div className="btn-group col-md-4">
            <button type="button" className="btn btn-default" onClick={() => {this.changeGraph(0)}}>
              Sospechas vs. Valor
            </button>
            <button type="button" className="btn btn-default" onClick={() => {this.changeGraph(1)}}>
              Contratos más caros
            </button>
          </div>
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
