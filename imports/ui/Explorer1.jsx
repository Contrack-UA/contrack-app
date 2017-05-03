import React, {Component, PropTypes} from 'react';
import {Well, Thumbnail, Pagination} from 'react-bootstrap';
import secop1 from '../data/secop1.json';

export default class Explorer1 extends Component {

  constructor(props){
    super(props);
    this.state = {
      sospechosidad: 0,
      precio: -1,
      entidad: ''
    }
  }

  changeSospechosidad(sosp) {
    this.setState({
      sospechosidad: sosp
    });
  }

  changePrecio(precio) {
    this.setState({
      precio: precio
    });
  }

  changeEntidad(ent) {
    this.setState({
      entidad: ent
    })
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
                <div className="col-md-4">
                  <h2>Sospechosidad:</h2>
                  <h2>
                    <i className="fa fa-circle superbad" aria-hidden="true" onClick={() => {this.changeSospechosidad(4)}}></i>
                    {' '}
                    <i className="fa fa-circle verybad" aria-hidden="true" onClick={() => {this.changeSospechosidad(3)}}></i>
                    {' '}
                    <i className="fa fa-circle bad" aria-hidden="true" onClick={() => {this.changeSospechosidad(2)}}></i>
                    {' '}
                    <i className="fa fa-circle good" aria-hidden="true" onClick={() => {this.changeSospechosidad(1)}}></i>
                    {' '}
                    <i className="fa fa-circle verygood" aria-hidden="true" onClick={() => {this.changeSospechosidad(0)}}></i>
                  </h2>
                </div>
                <div className="col-md-4">
                  <h2>Precio mínimo:</h2><br />
                  <input type="number" onChange={(event) => {this.changePrecio(event.target.value)}}></input>
                </div>
                <div className="col-md-4">
                  <h2>Entidad:</h2><br />
                  <input type="text" onChange={(event) => {this.changeEntidad(event.target.value)}}></input>
                </div>
              </div>
            </Thumbnail>
          </div>
          <div className="row contratos bod">
            {
              secop1.filter((contract) => {
                return contract.sospechas.length === this.state.sospechosidad
                      && contract['valor'] >= this.state.precio
                      && contract['nomEntidad'].toLowerCase().includes(this.state.entidad.toLowerCase())
              }).map((contract) => {
                var color = 'verygood';
                if(contract.sospechas.length === 1) {
                  color = 'good';
                }
                if(contract.sospechas.length === 2) {
                  color = 'bad';
                }
                if(contract.sospechas.length === 3) {
                  color = 'verybad';
                }
                if(contract.sospechas.length === 4) {
                  color = 'superbad';
                }
                return (
                  <div className='col-md-6'>
                    <Well>
                      <div className='row'>
                        <h4 className='col-md-10'>{contract['nomEntidad']}</h4>
                        <i className={"col-md-2 fa fa-circle fa-3x " + color} aria-hidden="true"></i>
                      </div>
                      <hr />
                      <p>
                      {
                        contract['detalle']
                      }
                      </p>
                      <p><strong>Valor del contrato: </strong>
                      {
                        '$' + contract['valor']
                      }
                      </p>
                      {
                        contract.sospechas.length > 0 ? (
                          <div>
                            <h5><strong>Factores sospechosos:</strong></h5>
                            <ul>
                              {
                                contract.sospechas.map((sospecha) => {
                                  return(
                                    <li>{sospecha}</li>
                                  )
                                })
                              }
                            </ul>
                          </div>
                        ):(
                          <div>
                            <h5><strong>No hay factores sospechosos </strong></h5>
                          </div>
                        )
                      }
                    </Well>
                  </div>
                )
              })
            }
          </div>
        </div>
      );
    }
  }
