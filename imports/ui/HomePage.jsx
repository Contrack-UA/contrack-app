import React, {Component, PropTypes} from 'react';

// Task component - represents a single todo item
export default class HomePage extends Component {
    render() {
        return (
            <div name="home">
            <section id="intro" className="colored text-center">
                <div className="container">
                    <div className="intro-well wow animated bounceIn">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6"></div>
                            <div className="col-lg-6 col-sm-6">
                                <h1>Esta plataforma esta diseñada para uso de todos los colombianos.</h1>
                                <h2 className="hidden-xs">Analiza, descubre y denuncia</h2>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="how-it-works" className="text-center">
                <div className="container wow fadeIn animated">
                    <div className="row col-md-12">
                        <h3>¿Como funciona?</h3>
                        <h4>Queremos asegurar que los gastos asociados a los contratos de obras públicas sean legítimos. Esto se piensa lograr a través de la correcta verificación de los soportes de gastos que las empresas proveen a los interventores (es decir: verificar que las facturas de soporte sean acordes al plan estipulado en la propuesta del contrato y que las facturas no estén modificadas para cobrar más de lo que se necesite, use o gaste en el proyecto)</h4>
                    </div>
                </div>
                <div className="container">
                    <div className="row" id="icon-row">
                        <div className="col-md-3 wow fadeInUp animated" data-wow-delay="0.4s">
                            <div className="iconbox">
                                <i className="fa fa-folder fa-3x"></i>
                            </div>
                            <h1 className="icntitle">1. Registros</h1>
                            <p className="icnp">Tenemos registro de todos los contratos de obras públicas en Colombia, incluyendo presupuesto, fecha de inicio y fin, estado del proyecto, etc (recuperados de Colombia compra eficiente). Estos datos son públicos
                            </p>
                        </div>
                        <div className="col-md-3 wow fadeInUp animated" data-wow-delay="0.8s">
                            <div className="iconbox">
                                <i className="fa fa-refresh fa-3x"></i>
                            </div>
                            <h1 className="icntitle">2. Actualización de estado</h1>
                            <p className="icnp">Exigir al interventor que las facturas de soporte entregadas por las empresas privadas sean ingresadas a su respectivo proyecto en la plataforma para su análisis.
                            </p>
                        </div>
                        <div className="col-md-3 wow fadeInUp animated" data-wow-delay="1.2s">
                            <div className="iconbox">
                                <i className="fa fa-search fa-3x"></i>
                            </div>
                            <h1 className="icntitle">3. Análisis</h1>
                            <p className="icnp">Analizar y validar los soportes de compra (las facturas asociadas a las compras de materiales, etc) para evitar que las facturas sean falsificadas. Asegurar que el precio de cada ítem corresponda a su precio real ,que la cantidad de ítems solicitados sea normal para el tamaño del proyecto ,que los artículos comprados sí sean necesarios para el proyecto.
                            </p>
                        </div>
                        <div className="col-md-3 wow fadeInUp animated" data-wow-delay="1.6s">
                            <div className="iconbox">
                                <i className="fa fa-check fa-3x"></i>
                            </div>
                            <h1 className="icntitle">4. Control</h1>
                            <p className="icnp">Llevar un seguimiento al presupuesto total del contrato VS los gastos que lleva hasta el momento (Los gastos que lleva no deberían superar por mucho el presupuesto que se justificó en el contrato).</p>
                        </div>
                        <div className="col-md-12 wow fadeInUp animated" data-wow-delay="2.4s">
                            <br/><br/>
                            <h3>
                                Si nuestros algoritmos identifican algo sospechoso o fuera de lo normal el contrato se verá de color ROJO y ustedes (ciudadanos, periodistas, estudiantes, funcionarios publicos) podrán indagar al respecto y exigir que la empresa que está llevando a cabo la obra sea investigada. La idea es que si hay un contrato cuyas facturas aparecen en rojo, el estado no cancele a la empresa esas facturas hasta investigar bien si la factura es legitima y está justificada la compra de dichos productos.⁠⁠⁠⁠
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
            <section id="ipad" className="colored text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h3>¿Quienes somos?</h3>
                            <p>4 estudiantes de la universidad de los Andes que buscamos un mejor país
                            </p>
                            <li>
                                <ul>Esteban Galán Zambrano</ul>
                                <ul>Margarita Gómez Ballén</ul>
                                <ul>Nicolás Gómez Gonzales</ul>
                                <ul>Jose Gabriel Tamura Lara
                                </ul>
                            </li>
                            <br/>
                        </div>
                        <div className="col-sm-6">
                            <img id="ipad" src="./img/us.png" alt="" className="wow animated fadeInRight" data-wow-delay="1s"/>
                        </div>
                    </div>
                </div>
            </section>
            <section id="final">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-center wow fadeInDown animated" data-wow-delay="0.8s">
                            <h3>
                                Trabajamos arduamente por una Colombia más honesta y mejor...
                            </h3>
                        </div>
                        <div className="col-md-8  wow fadeInUp animated">
                            <img src="./img/colombia.png" className="img-responsive wow" data-wow-delay="0.6s" alt="picture"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>);
    }
}
