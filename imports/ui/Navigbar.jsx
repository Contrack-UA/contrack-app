import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Navigbar extends Component {

  render() {
    return (
      <div>
                <Navbar className="navbar-inverse">
                    <Navbar.Header>
                        <Navbar.Brand>
                            ConTrack
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                            <Nav>
                              <LinkContainer to="/contratos">
                                <NavItem eventKey={1}>Contratos</NavItem>
                              </LinkContainer>
                              <LinkContainer to="/nosotros">
                                <NavItem eventKey={2}>Nosotros</NavItem>
                              </LinkContainer>
                              <LinkContainer to="/prox">
                                  <NavItem eventKey={3}>Próximamente</NavItem>
                              </LinkContainer>
                            </Nav>
                        <Nav pullRight>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
    );
  }
}
