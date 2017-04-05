import React, {Component, PropTypes} from 'react';
import {Well} from 'react-bootstrap';


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
                    <Well>
                      <h3 className="bold head center">Título</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                         dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                         mollit anim id est laborum.</p>
                    </Well>
                  </div>
                  <div className="col-md-4">
                    <Well>
                      <h3 className="bold head center">Título</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                         dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                         mollit anim id est laborum.</p>
                    </Well>
                  </div>
                  <div className="col-md-4">
                    <Well>
                      <h3 className="bold head center">Título</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                         dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                         mollit anim id est laborum.</p>
                    </Well>
                  </div>
                </div>
            </div>
        );
    }
}
