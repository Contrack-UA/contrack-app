import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Navigbar extends Component {

  render() {
    return (
      <div>
                <Navbar className="navbar-inverse">
                    <Navbar.Header>
                      <LinkContainer to="/">
                        <Navbar.Brand className="head bold" eventKey={0}>
                            ConTrack
                        </Navbar.Brand>
                      </LinkContainer>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                            <Nav className="bod">
                              <NavDropdown eventKey={2} title="SECOP I" id="SECOP1">
                                <LinkContainer to="/secop1/contratos">
                                  <MenuItem eventKey={2.1}>Contratos</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/secop1/graf">
                                  <MenuItem eventKey={2.2}>Gráficas</MenuItem>
                                </LinkContainer>
                              </NavDropdown>
                              <NavDropdown eventKey={3} title="SECOP II" id="SECOP2">
                                <LinkContainer to="/secop2/contratos">
                                  <MenuItem eventKey={3.1}>Contratos</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/secop2/graf">
                                  <MenuItem eventKey={3.2}>Gráficas</MenuItem>
                                </LinkContainer>
                              </NavDropdown>
                              <LinkContainer to="/contratos">
                                <NavItem eventKey={4}>Antes</NavItem>
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
