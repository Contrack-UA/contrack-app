import React, {Component, PropTypes} from 'react';
import {Well, Thumbnail, Pagination} from 'react-bootstrap';
import secop2 from '../data/secop2.json';

export default class Explorer2 extends Component {

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
            <h1>Contratos del SECOP II</h1>
          </div>
          <div className="scale head bold center">
            <Thumbnail>
              <div className="row">
                <div className="col-md-4">
                  <h2>Riesgo:</h2>
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
              secop2.filter((contract) => {
                let value = parseInt(contract['Valor Contrato'].replace(/(\,|(\.00))/g, ''));
                return contract.sospechosidad === this.state.sospechosidad
                      && value >= this.state.precio
                      && contract['Entidad Compradora'].toLowerCase().includes(this.state.entidad.toLowerCase())
              }).map((contract) => {
                var color = 'verygood';
                if(contract.sospechosidad === 1) {
                  color = 'good';
                }
                if(contract.sospechosidad === 2) {
                  color = 'bad';
                }
                if(contract.sospechosidad === 3) {
                  color = 'verybad';
                }
                if(contract.sospechosidad === 4) {
                  color = 'superbad';
                }
                return (
                  <div className='col-md-6'>
                    <Well>
                      <div className='row'>
                        <h4 className='col-md-10'>{contract['Entidad Compradora']}</h4>
                        <i className={"col-md-2 fa fa-circle fa-3x " + color} aria-hidden="true"></i>
                      </div>
                      <hr />
                      <p>
                      {
                        contract['Descripcion Contrato']
                      }
                      </p>
                      <p><strong>Valor del contrato: </strong>
                      {
                        '$' + contract['Valor Contrato']
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
