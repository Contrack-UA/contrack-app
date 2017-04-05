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
                      <LinkContainer to="/">
                        <Navbar.Brand className="head bold" eventKey={0}>
                            ConTrack
                        </Navbar.Brand>
                      </LinkContainer>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                            <Nav className="bod">
                              <LinkContainer to="/contratos">
                                <NavItem eventKey={1}>Contratos</NavItem>
                              </LinkContainer>
                              <LinkContainer to="/nosotros">
                                <NavItem eventKey={2}>SECOP I</NavItem>
                              </LinkContainer>
                              <LinkContainer to="/nosotros">
                                <NavItem eventKey={3}>SECOP II</NavItem>
                              </LinkContainer>
                              <LinkContainer to="/nosotros">
                                <NavItem eventKey={4}>Nosotros</NavItem>
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
