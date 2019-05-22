import React, { Component } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

class Navigationbar extends Component {

    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {

        return (
            <div>
                <Navbar color="dark" dark expand="md">

                    <NavbarBrand href="/">Furniture</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />

                    <Collapse isOpen={this.state.isOpen} navbar>

                        <Nav className="ml-auto" navbar>

                            <NavItem>
                                <NavLink href="#">Query</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="#">Contact Us</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="#">AddToCart</NavLink>
                            </NavItem>


                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navigationbar;