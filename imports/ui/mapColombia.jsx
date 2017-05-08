import React, {Component} from 'react';
import {render} from 'react-dom';
import {Well, Thumbnail} from 'react-bootstrap';
import Navigbar from './Navigbar.jsx';
import secop2 from '../data/secop2.json';
import lectorSecops from './lectorSecops.js';
import {Button} from 'react-bootstrap';

const  NO_SOSPECHOSO =2;
const  SEMI_SOSPECHOSO=4;
//import manejoRegiones from '../../client/manejoRegiones.js'

export default class mapColombia extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: '',
    };
  }

  dibujar(){
    $('#colombia-map').empty();
    console.log("dibujando mapa");
      var contratoActual = undefined;
      var mapaContratos = [];

      //var msg = [sensor];

      // hace un llamado a un metodo
      // se supone que este es el tamaño de la lista de arrays con contratos
      // cada lista tiene un numero de contratos que se puede recuperar por memoria
      var cuantosLotesDeObjetos = 1; //manejadorSecop1.cuantosLotesDeObjetos();

      //se itera sobre el array de listas para recuperar a memoria cada lista con n contratos
      //en convert quedan todos los contratos a ser representados
      var convert = [];
      var cuantosBien=0;
      var cuantosMedio=0;
      var cuantosMal=0;

      for(var w=0;w<cuantosLotesDeObjetos;w++){
        //trae la proxima lista de contratos de tamaño n
        var msg = lectorSecops.traerProximoLote();
        //console.log(msg);
        for (var i = 0; i < msg.length; i++) {
          mapaContratos[i] = msg[i];
            var color = undefined;
            if (msg[i].sospechosidad < NO_SOSPECHOSO) {
                color = "green";
                cuantosBien++;
            } else if (msg[i].sospechosidad < SEMI_SOSPECHOSO) {
                color = "yellow";
                cuantosMedio++;
            } else  {
                color = "red";
                cuantosMal++;
            }
            var n = {
                latLng: [
                    msg[i].lat, msg[i].lon
                ],
                name: msg[i]._id,
                style: {
                    fill: color,
                    r: 3
                }
            };
            convert.push(n);
        }
        //aquí ya estan todos los contratos a ser dibujados
        //console.log(convert);
    }
    $(document).ready(function() {
        $('#colombia-map').vectorMap({
          map: 'co_mill',
          backgroundColor: "transparent",
          regionStyle: {
              initial: {
                  fill: '#7D7D7D',
                  "fill-opacity": 1,
                  stroke: 'none',
                  "stroke-width": 0,
                  "stroke-opacity": 0
              }
          },
          markers: convert,
          onMarkerClick: function(event, index) {
              console.log("undio click al numero de contrato creado "+index);
              contratoActual = mapaContratos[index];

              console.log(contratoActual);
              var condicionContratoActual = (contratoActual.sospechosidad<NO_SOSPECHOSO?"Bien":(contratoActual.sospechosidad<SEMI_SOSPECHOSO?"Riesgo":"Anormal"));
              $('#infoContrato').text("Contrato id: " + contratoActual._id);
              $("#condicion").text(condicionContratoActual);
              $("#gradoSospecha").text(contratoActual.sospechosidad);
              $("#gradoSospechaAcompañante").text((contratoActual.sospechosidad<NO_SOSPECHOSO?"Bajo":(contratoActual.sospechosidad<SEMI_SOSPECHOSO?"Medio":"Alto")));
              var certeza1=Math.floor(Math.random()*50+30);
              var certeza2 = Math.floor(Math.random()*50+50);
              $("#certeza1").text(certeza1+"%");
              $("#certeza2").text(certeza2+"%");
          },
          markerStyle: {
              initial: {
                  fill: '#F8E23B',
                  stroke: '#383f47'
              }
          }
      });
      var total = cuantosBien + cuantosMedio + cuantosMal;
      $('#total').text(total);
      $('#numBien').text(cuantosBien);
      $('#numMedio').text(cuantosMedio);
      $('#numMal').text(cuantosMal);
      $('#porcentajeBien').width( (100*cuantosBien/total)+'%');
      $('#porcentajeMedio').width((100*cuantosMedio/total)+'%');
      $('#porcentajeMal').width((100*cuantosMal/total)+'%');

    });

  }

    render() {

        return (
            <div name="principal">
                <div className="row wrapper border-bottom white-bg page-heading">
                    <div className="col-lg-12">
                        <h2 className="breadcrumb head">Información General de los contratos en Colombia</h2>
                    </div>
                </div>
                <div className="wrapper wrapper-content">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div id="colombia-map"></div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="row">
                                        <Thumbnail className="col-lg-6 State">
                                            <div className="row data float-e-margins">
                                                <div className="col-md-12 row data-title">
                                                    <h5 className="col-md-8 bod" id="estadoPozos">Estado de Contratos</h5>
                                                    <h5 className="col-md-3" id="total"></h5>
                                                </div>
                                                <br/><br/>
                                                <div className="col-md-1"></div>
                                                <div className="col-md-11 data-content bod">
                                                    <div>
                                                        <span>Bien</span>
                                                        <small className="pull-right" id="numBien"></small>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-success" id="porcentajeBien"></div>
                                                    </div>
                                                    <div>
                                                        <span>En riesgo</span>
                                                        <small className="pull-right" id="numMedio"></small>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-warning" id="porcentajeMedio"></div>
                                                    </div>
                                                    <div>
                                                        <span>Condiciones anormales</span>
                                                        <small className="pull-right" id="numMal"></small>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-danger" id="porcentajeMal"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Thumbnail>
                                        <div className="col-md-1"></div>
                                          <div className="row col-lg-5 Emergencies bod">
                                            <div className="col-md-12 data-title bod">
                                                <h5 id="infoContrato">Seleccione un contrato</h5>
                                            </div>
                                            <div className="col-md-12 data-content">
                                                <div className="row m-t-sm">
                                                    <Well className="col-md-12 contenedorInfoContrato">
                                                        <div className="row tituloInfoContrato">
                                                            <div className="col-sm-8">
                                                                <h4 className="m-b-xs">Condición</h4>
                                                            </div>
                                                            <span className="col-sm-2 label label-info pull-right" id="certeza1"></span>
                                                            <div className="col-sm-2"></div>
                                                        </div>
                                                        <div className="row contenidoInfoContrato">
                                                          <br/>
                                                          <div className="col-sm-1"></div>
                                                            <div className="col-sm-2" id="check">
                                                                <i className="fa fa-check-square-o fa-2x"></i>
                                                            </div>
                                                            <div className="col-sm-1"></div>
                                                            <div className="col-sm-6" id="cond">
                                                              <h4 id="condicion" className="no-margins">-</h4>
                                                            </div>
                                                          <div className="col-sm-2"></div>
                                                        </div>
                                                    </Well>
                                                    <Well className="col-md-12 contenedorInfoContrato">
                                                        <div className="row tituloInfoContrato">
                                                            <div className="col-sm-10">
                                                                <h4 className="m-b-xs">Grado riesgo</h4>
                                                            </div>
                                                            <span className="col-sm-2 label label-info pull-right" id="certeza2"></span>
                                                        </div>
                                                        <div className="row contenidoInfoContrato">
                                                            <div className="col-sm-2">
                                                                <i className="fa fa-low-vision fa-2x"></i>
                                                            </div>
                                                            <div className="col-md-2"></div>
                                                            <div className="col-sm-2">
                                                                <h3 id="gradoSospecha" className="no-margins">-</h3>
                                                            </div>
                                                            <div className="col-sm-4 unionFaContenido">
                                                              <h4 id="gradoSospechaAcompañante">-</h4>
                                                            </div>
                                                        </div>
                                                    </Well>
                                                    <Well className="col-md-12 contenedorInfoContrato" >
                                                        <div className="row tituloInfoContrato">
                                                            <div className="col-sm-12">
                                                                <h4 className="m-b-xs">Ver contrato</h4>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 row contenidoInfoContrato">
                                                            <Button className="col-md-12"><div className="col-sm-2">
                                                                <i className="fa fa-share fa-2x"></i>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div className="no-margins">Click aquí</div>
                                                            </div>
                                                            <div className="col-sm-2"></div></Button>
                                                        </div>
                                                        <div className="col-sm-12 font-bold text-navy">Disponible
                                                            <i className="fa fa-check"></i><p></p>
                                                        </div>
                                                    </Well>
                                                </div>
                                            </div>
                                          </div>
                                    </div>
                                </div>
                                <br/><br/>

                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/><br/>
                {this.dibujar()}

            </div>

        );
    }
}
