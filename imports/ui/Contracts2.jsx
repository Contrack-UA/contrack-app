import React, {Component, PropTypes} from 'react';
import {Well, Thumbnail, Pagination} from 'react-bootstrap';
import secop2 from '../data/secop2.json';

export default class Contracts2 extends Component {

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
            <h1>Contratos del SECOP II</h1>
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
                <div className="col-md-3">
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
                <div className="col-md-2"></div>
              </div>
            </Thumbnail>
          </div>
          <div className="row contratos bod">
            {
              secop2.filter((contract) => {
                return contract.pagina === this.state.activePage;
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
                console.log(contract.sospechosidad + "  " + color);
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
                        contract['Valor Contrato']
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




  
