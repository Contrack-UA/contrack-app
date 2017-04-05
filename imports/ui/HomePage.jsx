import React, {Component, PropTypes} from 'react';
import {Well, Thumbnail} from 'react-bootstrap';


export default class HomePage extends Component {

    render() {
        return (
            <div>
              {new WOW().init()}
                <div className="row head bold center">
                  <h2>
                    Bienvenido a <br/> <br/>
                    <img src="https://68.media.tumblr.com/7fad5ad226733c8604e9aa92e033b017/tumblr_onw1hqFxyO1w7ypfio1_1280.png" className="logo" />
                    <br/>Una plataforma de uso libre para todos los colombianos.
                  </h2>
                </div>
                <br/>
                <div className="row bod">
                  <div className="col-md-4">
                    <Thumbnail>
                      <h3 className="head center">
                        <i className="fa fa-search fa-2x" aria-hidden="true"></i> <br/>
                        <strong className="green">Explora</strong> datos abiertos
                      </h3>
                      <p className="center">
                        Contamos con registros de más de 30 mil contratos de obras públicas en Colombia extraídos del SECOP I y SECOP II.
                      </p>
                    </Thumbnail>
                  </div>
                  <div className="col-md-4">
                    <Thumbnail>
                      <h3 className="head center">
                        <i className="fa fa-line-chart fa-2x" aria-hidden="true"></i> <br/>
                        <strong className="green">Filtra</strong> resultados
                      </h3>
                      <p className="center">
                        Procuramos facilitar la revisión de contratos. Organiza los datos por los criterios disponibles y mira las gráficas disponibles.
                      </p>
                    </Thumbnail>
                  </div>
                  <div className="col-md-4">
                    <Thumbnail>
                      <h3 className="head center">
                        <i className="fa fa-check fa-2x" aria-hidden="true"></i> <br/>
                        <strong className="green">Verifica</strong> estado de los contratos
                      </h3>
                      <p className="center">
                        Manejamos una escala de colores para indicar características sospechosas que deberían ser revisadas por las entidades encargadas.
                      </p>
                    </Thumbnail>
                  </div>
                </div>
                <div className="row bod center">
                  <Well>
                    <div className="row">
                      <div className="col-md-3">
                        <img src="https://image.flaticon.com/icons/png/512/24/24331.png" className="colombia" />
                      </div>
                      <div className="col-md-6">
                        <br/>
                        <h1 className="head">
                          Buscamos aportar a la transparencia en la ejecución de contratos en Colombia.
                        </h1>
                      </div>
                      <div className="col-md-3">
                        <img src="https://cheddargetter.com/marketing/img/metric_tracking_icon.png" className="minilogo" />
                      </div>
                    </div>
                  </Well>
                </div>
            </div>
        );
    }
}
