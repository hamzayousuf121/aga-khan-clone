import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = (props) => {
    return(
        <footer className={props.classes}>
        <Container>
          <Row>
            <Col>
            <p className="text-center text-white my-2">All Right Reserved &copy; 2019 Developed By Hamza Yousuf </p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
}

export default Footer;