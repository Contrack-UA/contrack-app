import React, {Component} from 'react';
import {render} from 'react-dom';
import {Well, Thumbnail} from 'react-bootstrap';
import Navigbar from './Navigbar.jsx';
import secop2 from '../data/secop2.json';
import lectorSecop1 from './lectorSecop1.js';

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
    console.log("dibujando mapa");
      var contratoActual = undefined;
      var mapaContratos = [];
      var sensor = {
          _id: 0,
          avgTemp: 20,
          avgPh: 8,
          avgSalt: 4,
          lat: 6.544560,
          lon: -70.019409,
          lastTemp: 40,
          lastPh: 8,
          lastSal: 4
      };
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
        var msg = lectorSecop1.traerProximoLote();
        console.log(msg);
        for (var i = 0; i < msg.length; i++) {
          mapaContratos[msg[i]._id] = msg[i];
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
                    fill: color
                }
            };
            convert.push(n);
        }
        //aquí ya estan todos los contratos a ser dibujados
        console.log(convert);
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
            console.log("undio click a "+index);
              contratoActual = mapaContratos[index];
              console.log(contratoActual);
              var condicionContratoActual = (contratoActual.sospechosidad<NO_SOSPECHOSO?"Bien":(contratoActual.sospechosidad<SEMI_SOSPECHOSO?"Riesgo":"Anormal"));
              $('#infoContrato').text("Contrato id: " + contratoActual._id);
              $("#condicion").text(condicionContratoActual);
              $("#gradoSospecha").text(contratoActual.sospechosidad);
              $("#gradoSospechaAcompañante").text((contratoActual.sospechosidad<NO_SOSPECHOSO?"Bajo":(contratoActual.sospechosidad<SEMI_SOSPECHOSO?"Medio":"Alto")));
              var certeza1=Math.floor(Math.random()*50+30);
              var certeza2 = Math.floor(Math.random()*50+50);
              $("#certeza1").text("Certeza: "+certeza1+"%");
              $("#certeza2").text("Certeza: "+certeza2+"%");
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
                        <h2 className="breadcrumb">Información General de los contratos en Colombia</h2>
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
                                        <Thumbnail className="col-lg-4 State">
                                            <div className="row data float-e-margins">
                                                <div className="col-md-12 row data-title">
                                                    <h5 className="col-md-8" id="estadoPozos">Estado de Contratos</h5>
                                                    <h5 className="col-md-3" id="total"></h5>
                                                </div>
                                                <br/><br/>
                                                <div className="col-md-1"></div>
                                                <div className="col-md-11 data-content">
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
                                        <Thumbnail className="col-lg-7 Emergencies">

                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="data float-e-margins">
                                                        <div className="data-title">
                                                            <span className="label label-success pull-right">Hoy</span>
                                                            <h5 id="listaEmergen">Lista de Emergencias</h5>
                                                        </div>
                                                        <div className="data float-e-margins">

                                                            <div className="data-content">

                                                                <div className="stat-percent font-bold text-warning">10%
                                                                    <i className="fa fa-level-down"></i>
                                                                </div>
                                                                <small>Actualización: {new Date().toDateString()}
                                                                </small>
                                                            </div>
                                                        </div>
                                                        <div className="data-content">
                                                            <div className="scroll_content">
                                                                <div className="table-responsive">
                                                                    <table className="table table-hover issue-tracker">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="label label-primary">Caribe</span>
                                                                                </td>
                                                                                <td className="issue-info">
                                                                                    <a href="#">
                                                                                        Sobrecosto de 500%
                                                                                    </a>
                                                                                    <small>
                                                                                        Se detectaron sobrecostos por valores superiores al 500%
                                                                                    </small>
                                                                                </td>
                                                                                <td>
                                                                                    <small className="center"><strong>ID_Contrato: 987sf8ef</strong></small>
                                                                                </td>
                                                                                <td>
                                                                                    12.02.2015 10:00 am
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="label label-primary">Andina</span>
                                                                                </td>
                                                                                <td className="issue-info">
                                                                                    <a href="#">
                                                                                        Falta el 90% de la información
                                                                                    </a>
                                                                                    <small>
                                                                                        Se ha detectado que un nuevo contrato carece de información
                                                                                    </small>
                                                                                </td>
                                                                                <td>
                                                                                    <small><strong>ID_Contrato: w9rt87sf</strong></small>
                                                                                </td>
                                                                                <td>
                                                                                    12.02.2015 10:00 am
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Thumbnail>
                                    </div>

                                </div>

                                <div className="col-lg-6">
                                    <div className="row data">
                                        <div className="data-title">
                                            <h4><strong>Información contrato seleccionado</strong></h4>
                                            <h3 id="infoContrato">Seleccione un contrato del mapa.</h3>
                                        </div>
                                        <div className="data-content">
                                            <div className="row m-t-sm">
                                                <div className="col-sm-4 contenedorInfoContrato">
                                                    <div className="row tituloInfoContrato">
                                                        <div className="col-sm-12">
                                                            <h4 className="m-b-xs"><strong>Condición</strong></h4>
                                                        </div>
                                                    </div>
                                                    <div className="row contenidoInfoContrato">
                                                      <br/>
                                                        <div className="col-sm-2">
                                                            <i className="fa fa-check-square-o fa-3x"></i>
                                                        </div>
                                                        <div className="col-sm-2"/>
                                                        <div className="col-sm-6">
                                                          <h4 id="condicion" className="no-margins">Anormal</h4>
                                                        </div>
                                                      <div className="col-sm-2"/>
                                                    </div>
                                                    <div className="col-sm-12 font-bold text-navy"><p id="certeza1">Certeza: {Math.floor(Math.random()*50+30)}%</p>

                                                    </div>
                                                </div>
                                                <div className="col-sm-4 contenedorInfoContrato">
                                                    <div className="row tituloInfoContrato">
                                                        <div className="col-sm-12">
                                                            <h4 className="m-b-xs"><strong>Grado riego</strong></h4>
                                                        </div>
                                                    </div>
                                                    <div className="row contenidoInfoContrato">
                                                      <br/>
                                                      <div className="col-sm-2"></div>
                                                        <div className="col-sm-2">
                                                            <i className="fa fa-low-vision fa-3x"></i>
                                                        </div>
                                                        <div className="col-sm-6 unionFaContenido">
                                                            <h1 id="gradoSospecha" className="no-margins">5</h1>
                                                            <h6 id="gradoSospechaAcompañante">Alto</h6>
                                                        </div>
                                                        <div className="col-sm-2"></div>
                                                    </div>
                                                    <div className="col-sm-12 font-bold text-navy"><p id="certeza2">Certeza: {Math.floor(Math.random()*50+50)}%</p>

                                                    </div>
                                                </div>
                                                <div className="col-sm-4 contenedorInfoContrato">
                                                    <div className="row tituloInfoContrato">
                                                        <div className="col-sm-12">
                                                            <h4 className="m-b-xs"><strong>Ver contrato</strong></h4>
                                                        </div>
                                                    </div>
                                                    <div className="row contenidoInfoContrato" id="botonVerContrato">
                                                      <br/>
                                                      <div className="col-sm-2"></div>
                                                        <div className="col-sm-2">
                                                            <i className="fa fa-share fa-2x"></i>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <h3 className="no-margins">Click aquí</h3>
                                                        </div>
                                                        <div className="col-sm-2"></div>
                                                    </div>
                                                    <div className="col-sm-12 font-bold text-navy">Dispoinible:SI
                                                        <i className="fa fa-check"></i><p></p>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-1"/>
                                <div className="col-lg-5">
                                    <div className="row data float-e-margins">
                                        <div className="data-title">
                                            <span className="label label-success pull-right">Prueba esta nueva funcionalidad</span>
                                            <h5><strong>Generar Reporte</strong></h5>
                                        </div>
                                        <div className="data-content">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <button data-toggle="dropdown" className="btn btn-primary btn-block dropdown-toggle">Reporte por Zona
                                                        <span className="caret"></span>
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a href="#" className="font-bold">Mensual</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="font-bold">Trimestral</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="font-bold">Semestral</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="font-bold">Anual</a>
                                                        </li>
                                                        <li className="divider"></li>
                                                        <li>
                                                            <a href="#">Más opciones</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <button data-toggle="dropdown" className="btn btn-default btn-block dropdown-toggle">Reporte por emergencia
                                                        <span className="caret"></span>
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a href="#" className="font-bold">Mensual</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="font-bold">Trimestral</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="font-bold">Semestral</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="font-bold">Anual</a>
                                                        </li>
                                                        <li className="divider"></li>
                                                        <li>
                                                            <a href="#">Más opciones</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <button data-toggle="dropdown" className="btn btn-default btn-block dropdown-toggle">Reporte por sensor
                                                        <span className="caret"></span>
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <a href="#" className="font-bold">Mensual</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="font-bold">Trimestral</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="font-bold">Semestral</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="font-bold">Anual</a>
                                                        </li>
                                                        <li className="divider"></li>
                                                        <li>
                                                            <a href="#">Más opciones</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
