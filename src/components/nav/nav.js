import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,Container } from 'reactstrap';
    import SingInLinks from './singInLinks'
  

 class NavBar extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {isOpen: false};
      }


      toggle = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }


//className="navbarcolor"
    render() {
        return (
          <Navbar className="navbarcolor" dark expand="md">
          <Container>
          <NavbarBrand className="text-white font-weight-bold">Aga Khan Medical</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <SingInLinks />
            </Nav>
          </Collapse>
          </Container>
        </Navbar>
        )
    }
}

export default NavBar;
