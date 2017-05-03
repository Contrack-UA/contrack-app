import React, {Component, PropTypes} from 'react';
import {Well} from 'react-bootstrap';


export default class Graphs2 extends Component {

  render(){
    return(
      <div>
        <div className="row head green">
          <h1>Gráficas del SECOP II</h1>
        </div>
        <div className="scale bod bold center">
          <h3>Sospechas Encontradas <strong> vs. </strong> Valor del Contrato</h3>
          <img src="https://68.media.tumblr.com/807691bdf4aa39562f52e4f4a522a2c7/tumblr_onygaestxV1w7ypfio1_1280.png" className="graph center"/>
        </div>
          
      </div>
    );
  }

}
