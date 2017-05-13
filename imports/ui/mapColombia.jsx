import React, {Component} from 'react';
import {render} from 'react-dom';
import {Well, Thumbnail} from 'react-bootstrap';
import Navigbar from './Navigbar.jsx';
import secop2 from '../data/secop2.json';
import lectorSecops from './lectorSecops.js';
import {Button} from 'react-bootstrap';

const  NO_SOSPECHOSO =2;
const  SEMI_SOSPECHOSO=3;
var idSeleccionado = undefined;
var filtro = undefined;
var valor = undefined;
//import manejoRegiones from '../../client/manejoRegiones.js'

export default class mapColombia extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: '',
    };
  }

  formatMoney (n, d, t){
  var
      d = d == undefined ? "." : d,
      t = t == undefined ? "," : t,
      s = n < 0 ? "-" : "$ ",
      i = String(parseInt(n = Math.abs(Number(n) || 0))),
      j = (j = i.length) > 3 ? j % 3 : 0;
     return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t);
   };

  mostrarContrato(id){
    if(id){
      var contrato = lectorSecops.buscarContratoId(id);
      sweetAlert({
        title: 'Contrato con ID: '+id,
        text:  contrato.nomEntidad+"\n "+ contrato.lugar+"\n "+
        contrato.detalle+"\n Valor:"+ this.formatMoney(contrato.valor,"'",',')+"\n \n"+ contrato.sospechas.toString()
        +"\n \n"+ "OK para ser redirigido al contrato",
        type: 'info',
        showCancelButton: true,
        confirmLoadingButtonColor: '#DD6B55'
      },
      function(){
          window.location.href = contrato.link;
      });
    }else{
      sweetAlert("Por favor seleccione un contrato del mapa para poder ver sus características.");
    }
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
        var j=0;
        for (var i = 0; i < msg.length; i++) {

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
                name: this.formatMoney(msg[i].valor,"'",','),
                style: {
                    fill: color,
                    r: 3
                }
            };
            if(filtro === 'mal' && color !== 'red'){
            }
            else if(filtro === 'bien' && color !== 'green'){
            }
            else if(filtro === 'medio' && color !== 'yellow'){
            }
            else{
              if(valor){
                //console.log(  msg[i]);
                //console.log("el valor de filtro actual es: "+valor +"  el valor del contrato es "+msg[i].valor);
                  if (parseInt(valor) <= msg[i].valor ){
                    console.log("lo agrega");
                    mapaContratos[j] = msg[i];
                    j++;
                    convert.push(n);
                  }
              }
              else{
                mapaContratos[j] = msg[i];
                j++;
                convert.push(n);
              }
            }

        }
        //aquí ya estan todos los contratos a ser dibujados
        //console.log(convert);
    }
    $(document).ready(function() {
        $('#colombia-map').vectorMap({
          map: 'co_mill',
          markersSelectable: true,
          markersSelectableOne: true,
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

              idSeleccionado = contratoActual._id;
          },
          markerStyle: {
              initial: {
                  fill: '#F8E23B',
                  stroke: '#383f47'
              },
              selected: {
                fill: 'blue',
                stroke: '#383f47'
              }
          }
      });
      var total = cuantosBien + cuantosMedio + cuantosMal;
      $('#total').text(total);
      $('#numBien').text(cuantosBien);
      $('#numMedio').text(cuantosMedio);
      $('#numMal').text(cuantosMal);
      $('#porcentajeBien').width( "");
      $('#porcentajeMedio').width("");
      $('#porcentajeMal').width("");
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
                                        <div className="col-md-6"><Thumbnail className="col-md-12 State">
                                            <div className="row data float-e-margins">
                                                <div className="col-md-12 row data-title" onClick={()=>{filtro = undefined;this.dibujar();}}>
                                                    <h5 className="col-md-8 bod"  id="numTodos">Estado de Contratos</h5>
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
                                                        <div className="progress-bar progress-bar-success" id="porcentajeBien" onClick={()=>{filtro = 'bien';this.dibujar();}}></div>
                                                    </div>
                                                    <div>
                                                        <span>En riesgo</span>
                                                        <small className="pull-right" id="numMedio"></small>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-warning" id="porcentajeMedio" onClick={()=>{filtro = 'medio';this.dibujar();}}></div>
                                                    </div>
                                                    <div>
                                                        <span>Condiciones anormales</span>
                                                        <small className="pull-right" id="numMal"></small>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-danger" id="porcentajeMal" onClick={()=>{filtro = 'mal';this.dibujar();}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Thumbnail>
                                        <Thumbnail className="col-md-12 State">
                                          <div><strong>Filtros</strong></div>
                                            <h5> Por <strong>estado</strong> del contrato: <br/>Click en barras de porcentaje.</h5>
                                            <h5> Por <strong>precio </strong>del contrato: Ingresa un valor</h5>
                                            <div className="center"><input id="inputValorMapa" type="number" onChange={(event) => {valor = event.target.value;}}></input></div>
                                            <div className="center"><Button  id="botonFiltroMapa" onClick={()=>{this.dibujar();}}>Filtrar</Button></div>

                                        </Thumbnail></div>
                                        <div className="col-md-1"></div>
                                        <Thumbnail className="col-lg-5 Emergencies">
                                          <div className="row">
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
                                                        <div className="col-md-12 row contenidoInfoContrato" onClick={()=>{this.mostrarContrato(idSeleccionado);}}>
                                                            <Button className="col-md-12"><div className="col-sm-2">
                                                                <i className="fa fa-share fa-2x"></i>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div className="no-margins">Click aquí</div>
                                                            </div>
                                                            <div className="col-sm-2"></div></Button>
                                                        </div>
                                                        <div className="col-sm-12 font-bold text-navy">Dispoinible
                                                            <i className="fa fa-check"></i><p></p>
                                                        </div>
                                                    </Well>
                                                </div>
                                            </div>
                                          </div>
                                        </Thumbnail>
                                    </div>
                                </div>
                                <br/><br/>
                                <div className="col-lg-3"/>
                                <div className="col-lg-6">
                                    <div className="row data float-e-margins">
                                        <div className="data-title">
                                            <span className="label label-info pull-right">Prueba esta nueva funcionalidad</span>
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
