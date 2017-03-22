import React, {Component, PropTypes} from 'react';
import { Template } from 'meteor/templating';
import Accounts from './AccountsUIWrapper.jsx';

export default class HomePage extends Component {

  render() {
    return (
      <div className="home-layout">
        {new WOW().init()}
        <section id="intro" className="colored text-center">
          <div className="container">
            <div className="intro-well wow animated bounceIn" >
              <div className="row">
                <div className="col-lg-6 col-sm-6"></div>
                <div className="col-lg-6 col-sm-6 textP" >
                  <h1 className="textP">Esta plataforma está diseñada para uso de todos los colombianos.</h1>
                  <h2 className="hidden-xs">Analiza, descubre y denuncia</h2>
                  <Accounts /><br/>
                  <p>Si no tienes cuenta, ve directamente a <a onClick={() => {this.props.goProjects()}}>los proyectos</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="text-center">
          <div className="container wow fadeIn animated" >
            <div className="row col-md-12">
              <br/><br/>
              <h3>¿Cómo funciona?</h3>
              <h4 className="text-justify">Queremos asegurar que los gastos asociados a los contratos de obras públicas sean legítimos a través de la verificación de los soportes de gastos que las empresas proveen a los interventores</h4>
            </div>
          </div>
          <div className="container">
            <div className="row" id="icon-row">
              <div className="col-md-3 wow fadeInUp animated" data-wow-delay="0.4s">
                <div className="iconbox">
                  <i className="fa fa-folder fa-3x"></i>
                </div>
                <h1 className="icntitle">1. Registros</h1>
                <p className="icnp text-justify">Tenemos registro de todos los contratos de obras públicas en Colombia, incluyendo presupuesto, fecha de inicio y fin, estado del proyecto, etc (recuperados de Colombia compra eficiente)</p>
              </div>
              <div className="col-md-3 wow fadeInUp animated" data-wow-delay="0.8s">
                <div className="iconbox">
                  <i className="fa fa-refresh fa-3x"></i>
                </div>
                <h1 className="icntitle">2. Actualización de estado</h1>
                <p className="icnp text-justify">Exigir al interventor que las facturas de soporte sean ingresadas a su respectivo proyecto en la plataforma para su análisis.
                </p>
              </div>
              <div className="col-md-3 wow fadeInUp animated" data-wow-delay="1.2s">
                <div className="iconbox">
                  <i className="fa fa-search fa-3x"></i>
                </div>
                <h1 className="icntitle">3. Análisis</h1>
                <p className="icnp text-justify">Analizar y validar los soportes de compra para evitar que las facturas sean falsificadas. Asegurar que el precio de cada ítem corresponda a su precio real, que la cantidad de ítems solicitados sea normal para el tamaño del proyecto, que los artículos comprados sí sean necesarios para el proyecto.
                </p>
              </div>
              <div className="col-md-3 wow fadeInUp animated" data-wow-delay="1.6s">
                <div className="iconbox">
                  <i className="fa fa-check fa-3x"></i>
                </div>
                <h1 className="icntitle">4. Control</h1>
                <p className="icnp text-justify">Llevar un seguimiento al presupuesto total del contrato VS los gastos que lleva hasta el momento. Los gastos que lleva no deberían superar el presupuesto que se justificó en el contrato.</p>
              </div>
              <div className="col-md-12 wow fadeInUp animated" data-wow-delay="2.4s">
                <br/><br/>
                <h3 className="text-justify">
                  Si nuestros algoritmos identifican algo sospechoso, el contrato se verá de color <span className="red-font">rojo</span> y el público en general podrá indagar al respecto y exigir que la empresa que está llevando a cabo la obra sea investigada. La idea es que si hay un contrato cuyas facturas aparecen en rojo, el estado no cancele a la empresa esas facturas hasta investigar bien si la factura es legítima y está justificada la compra de dichos productos.⁠⁠⁠⁠
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section id="ipad" className="colored text-center">
          <div className="container">
            <div className="row">
              <h3>¿Quiénes somos?</h3>
            </div>
            <div className="row">
              <div className="col-md-4">
                <p>Cuatro estudiantes de la Universidad de los Andes<br/>que buscamos un mejor país</p>
                <ul className="text-left">
                  <li>Esteban Galán </li>
                  <li>Margarita Gómez </li>
                  <li>Nicolás Gómez </li>
                  <li>Jose Gabriel Tamura </li>
                </ul>
                <br/>
              </div>
              <div className="col-md-2 col-md-offset-2">
                <img id="ipad" src="./img/us.png" width="150" alt="" className="wow animated fadeInRight" data-wow-delay="1s"/>
              </div>
              <div className="col-md-6">
                <p>Contamos con asesoría del ex-zar anticorrupción,<br/> dos senadores y personal de INVIAS</p>
              </div>
            </div>
          </div>
        </section>
        <section id="final">
          <div className="container">
            <div className="last row">
              <div className="col-md-2 col-md-offset-2  wow fadeInUp animated">
                <img src="./img/colombia.png" className="img-responsive wow" data-wow-delay="0.6s" alt="picture"/>
              </div>
              <div className="col-md-4 col-md-offset-1 text-center wow fadeInDown animated" data-wow-delay="0.8s">
                <h3>
                  Trabajamos por una Colombia más honesta y mejor...
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>);
    }
  }
