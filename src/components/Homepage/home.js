import React from "react";
import Slider1 from "../Slide/slide1"
import { Container, Row, Col } from 'reactstrap';
import List from "../List/list";
import Footer from "../footer/footer";
import Overview from "../overview/overview";

const Home = ( ) => {
  
  return ( <div>
    
    {/* // Slider Component start from here */}
    <Slider1 />
    {/* List start  from here  */}
    <Overview />
    <Container>
      <Row>
        <Col xs="12" sm="12" md="6" lg="12" xl="6">
        <List />
        </Col>
          <Col xs="12" sm="12" md="6" lg="12" xl="6">
          <List name="Africa"/>
          </Col>
        </Row>
      </Container>

          {/* footer start here */}
              <Footer classes="bg-dark py-3" />


    </div>
    )
}

export default Home;