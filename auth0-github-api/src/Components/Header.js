import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Header extends Component {
    render(){
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        GitHub Searcher
                    </Navbar.Brand>
                </Navbar.Header>

                <Nav>
                    <NavItem href="#">
                        LogIn
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Header;