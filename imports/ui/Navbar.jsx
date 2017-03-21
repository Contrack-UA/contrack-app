import {Meteor} from 'meteor/meteor';
import React, {Component, PropTypes} from 'react';
import Accounts from './AccountsUIWrapper.jsx';

// Task component - represents a single todo item
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar navbar-default" role="navigation">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Contrack</a>
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <Accounts/>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
