import React, {Component, PropTypes} from 'react';
import {Template} from 'meteor/templating';

export default class HomePage extends Component {

    render() {
        return (
            <div>
                <div className="row head center">
                  <h1>
                    Bienvenido a 
                  </h1>
                    <img src="https://68.media.tumblr.com/7fad5ad226733c8604e9aa92e033b017/tumblr_onw1hqFxyO1w7ypfio1_1280.png" className="logo" />

                </div>
            </div>
        );
    }
}
