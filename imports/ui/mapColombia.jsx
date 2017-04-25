import React, {Component} from 'react';
import {render} from 'react-dom';
import {Well, Thumbnail} from 'react-bootstrap';
import Navigbar from './Navigbar.jsx';

export default class mapColombia extends Component {

    render() {
        return (
            <div name="principal">
                <div className="row wrapper border-bottom white-bg page-heading">
                    <div className="col-lg-12">
                        <h2 >
                          Información General del ambiente coralino</h2>
                        <ol className="breadcrumb">
                            <li className="active">
                                <strong id="title-h">Región: Nacional</strong>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="wrapper wrapper-content">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div id="colombia-map"></div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="row">
                                        <Thumbnail className="col-lg-5 State">
                                            <div className="data float-e-margins">
                                                <div className="data-title">
                                                    <span className="label label-success pull-right">Ahora Mismo</span>
                                                    <h5 id="estadoPozos">Estado ecosistema</h5>
                                                </div>
                                                <div className="data-content">
                                                    <div>
                                                        <span>Bien</span>

                                                        <small className="pull-right" id="numProduccion"></small>

                                                    </div>
                                                    <div className="progress progress-small">
                                                        <div className="progress-bar" id="percentageProduccion"></div>
                                                    </div>
                                                    <div>
                                                        <span>En riesgo</span>
                                                        <small className="pull-right" id="numAbiertos"></small>
                                                    </div>
                                                    <div className="progress progress-small">
                                                        <div className="progress-bar progress-bar-warning" id="percentageAbiertos"></div>
                                                    </div>
                                                    <div>
                                                        <span>Condiciones anormales</span>
                                                        <small className="pull-right" id="numParados"></small>
                                                    </div>
                                                    <div className="progress progress-small">
                                                        <div className="progress-bar progress-bar-danger" id="percentageParados"></div>
                                                    </div>
                                                    <div>
                                                        <span>Estado critico</span>
                                                        <small className="pull-right" id="numClausurados"></small>
                                                    </div>
                                                    <div className="progress progress-small">
                                                        <div className="progress-bar progress-bar-info" id="percentageClausurados"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Thumbnail>
                                        <Thumbnail className="col-lg-6 Emergencies">

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
                                                                                    <span className="label label-warning">Pacifico</span>
                                                                                </td>
                                                                                <td className="issue-info">
                                                                                    <a href="#">
                                                                                        PH elevado
                                                                                    </a>
                                                                                    <small>
                                                                                        Ph sumamente elevado en sensor 3
                                                                                    </small>
                                                                                </td>
                                                                                <td>
                                                                                    Sensor 3
                                                                                </td>
                                                                                <td>
                                                                                    12.02.2015 10:00 am
                                                                                </td>
                                                                                <td>
                                                                                    <span className="pie">0.52,1.041</span>
                                                                                    2d
                                                                                </td>
                                                                                <td className="text-right">
                                                                                    <button className="btn btn-white btn-xs">
                                                                                        Tag</button>
                                                                                    <button className="btn btn-white btn-xs">
                                                                                        Mag</button>
                                                                                    <button className="btn btn-white btn-xs">
                                                                                        Rag</button>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="label label-primary">Caribe</span>
                                                                                </td>
                                                                                <td className="issue-info">
                                                                                    <a href="#">
                                                                                        Alta temperatura
                                                                                    </a>
                                                                                    <small>
                                                                                        Se ha detectado un incremento de 3 grados en el sensor 8
                                                                                    </small>
                                                                                </td>
                                                                                <td>
                                                                                    sensor 8
                                                                                </td>
                                                                                <td>
                                                                                    12.02.2015 10:00 am
                                                                                </td>
                                                                                <td>
                                                                                    <span className="pie">0.52,1.041</span>
                                                                                    2d
                                                                                </td>
                                                                                <td className="text-right">
                                                                                    <button className="btn btn-white btn-xs">
                                                                                        Tag</button>
                                                                                    <button className="btn btn-white btn-xs">
                                                                                        Mag</button>
                                                                                    <button className="btn btn-white btn-xs">
                                                                                        Rag</button>
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
                                    <div className="data">
                                        <div className="data-title">
                                            <h5 id="infoPozo">Sensor : 58</h5>
                                        </div>
                                        <div className="data-content">
                                            <div className="row m-t-sm">
                                                <div className="col-sm-4">
                                                    <div className="row">
                                                        <div className="col-sm-7">
                                                            <h5 className="m-b-xs">Temperatura</h5>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <span className="label label-info m-b-xs">Min</span>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-3">
                                                            <i className="wi wi-celsius fa-3x"></i>
                                                        </div>
                                                        <div className="col-sm-9">
                                                            <h1 id="temp" className="no-margins">25</h1>Celsius
                                                        </div>
                                                    </div>
                                                    <div className="font-bold text-navy">98%
                                                        <i className="fa fa-bolt"></i>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="row">
                                                        <div className="col-sm-8">
                                                            <h5 className="m-b-xs">PH
                                                            </h5>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <span className="label label-info m-b-xs">Hora</span>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-4">
                                                            <i className="wi wi-windy fa-3x"></i>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <h1 id="barr" className="no-margins">8.179</h1>0-14
                                                        </div>
                                                    </div>
                                                    <div className="font-bold text-navy">98%
                                                        <i className="fa fa-bolt"></i>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="row">
                                                        <div className="col-sm-8">
                                                            <h5 className="m-b-xs">Salinidad</h5>
                                                        </div>
                                                        <div className="col-sm-1">
                                                            <span className="label label-info m-b-xs">Hora</span>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-3">
                                                            <i className="wi wi-lightning fa-3x"></i>
                                                        </div>
                                                        <div className="col-sm-9">
                                                            <h1 id="ener" className="no-margins">3%</h1>halinidad
                                                        </div>
                                                    </div>
                                                    <div className="font-bold text-navy">3%
                                                        <i className="fa fa-bolt"></i>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="data float-e-margins">
                                        <div className="data-title">
                                            <span className="label label-success pull-right">Hoy</span>
                                            <h5>Generar Reporte</h5>
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
            </div>

        );
    }
}
