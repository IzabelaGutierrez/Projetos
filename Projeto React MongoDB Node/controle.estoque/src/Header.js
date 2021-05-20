import React from 'react'
import react, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Frexco from "./Imagem/Frexco.png"

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
    return (
      <div>
      <Container  style={{marginLeft: "0px"}}>
        <Row >
            <Col xs="2"><img src={Frexco}/> </Col>
            <Col xs="10"><h1 style={{marginTop: "50px"}} >Controle de Estoque</h1></Col>
        </Row>
      </Container>

        <Navbar color="light" light expand="md">
        <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/cadastroprodutos"> <strong>Cadastro de Produto</strong></NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink href="/listagem"><strong>Produto x Estoque</strong></NavLink>
            </NavItem>              
                      
          </Nav>
        </Collapse>
         
        </Navbar>
      </div>
    );
  };    



export default Header;
