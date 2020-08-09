import React, { useState } from "react";
import Heading from "../Heading/heading";
import Footer from "../footer/footer";
import { Container, Row, Col } from "reactstrap";
import Pic from "../../assets/services.jpg";
import ImgCard from "../imgCard/img";
import { Collapse, Button, CardBody, Card } from "reactstrap";

const Service = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const data = {
    title: "Our Services",
    content: `Aga Khan University Hospitals in Karachi, Pakistan and Nairobi,
        Kenya are private, not-for-profit institutions providing high
         quality health care. The Aga Khan Trust for Culture (AKTC) focuses on the physical, social, cultural and economic 
         revitalisation of communities in the developing world.The Main Hospitals serve as the principal
          sites for clinical training for the University's Medical Colleges
           and Schools of Nursing and Midwifery in Pakistan and East Africa.`
  };
  const Servicess = {
    title: "Aga Khan Health Services",
    content: `The Aga Khan Health Services (AKHS) is one of three agencies of the Aga Khan Development Network (AKDN) that support 
        activities in health.  The others are the Aga Khan Foundation (AKF) and the Aga Khan University (AKU). 
        Together, the three agencies provide quality health care to five million people annually and work closely 
        on planning, training and resource development.`
  };
  const trust = {
    title: "Aga Khan Trust for Culture",
    content: `The Aga Khan Trust for Culture (AKTC) focuses on the physical, social, cultural and economic T
        revitalisation of communities in the developing world.  It includes the Aga Khan Award for Architecture,
         the Aga Khan Historic Cities Programme, the Aga Khan Music Initiative, the Aga Khan Museum in Toronto, 
         Canada, the on-line resource Archnet.org and related programmes.  `
  };

  // componentDidMount() {
  //   db.collection("users")
  //     .get()
  //     .then(querySnapshot => {
  //       const data = querySnapshot.docs.map(doc => doc.data());
  //       console.log(data);
  //       this.setState({ users: data });
  //     });
  // }
  return (
    <div>
      <Container>
        <Row>
          <Col xs="12" sm="12" md="6" lg="4" xl="4">
            <ImgCard classes="my-5 rounded-0" src={Pic} />
          </Col>
          <Col xs="12" sm="12" md="6" lg="8" xl="8">
            <Heading
              classes="bg-white my-5 py-0 rounded-0"
              h1="font-weight-bolder"
              title={trust.title}
              content={trust.content}
            />
          </Col>
        </Row>
      </Container>

      <div className="bg-light">
        <Container>
          <Row>
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
              <Heading
                classes="bg-light pl-0 my-5 py-0 rounded-0"
                h1="font-weight-bolder"
                title={Servicess.title}
                content={Servicess.content}
              />
              <Button
                color="primary"
                onClick={toggle}
                style={{ marginBottom: "1rem" }}
              >
                Read More
              </Button>
              <Collapse isOpen={isOpen}>
                <Card>
                  <CardBody>
                    The Aga Khan Trust for Culture (AKTC) focuses on the
                    physical, social, cultural and economic revitalisation of
                    communities in the developing world. It includes the Aga
                    Khan Award for Architecture
                  </CardBody>
                </Card>
              </Collapse>
            </Col>
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
              <Heading
                classes="bg-light pl-0 my-5 py-0 rounded-0"
                h1="font-weight-bolder"
                title={data.title}
                content={data.content}
              />
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
              <Heading
                classes="bg-light pl-0 my-5 py-0 rounded-0"
                h1="font-weight-bolder"
                title={data.title}
                content={data.content}
              />
            </Col>
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
              <Heading
                classes="bg-light pl-0 my-5 py-0 rounded-0"
                h1="font-weight-bolder"
                title={trust.title}
                content={trust.content}
              />
              <Button
                color="primary"
                onClick={toggle}
                style={{ marginBottom: "1rem" }}
              >
                Read More
              </Button>
              <Collapse isOpen={isOpen}>
                <Card>
                  <CardBody>
                    The Aga Khan Trust for Culture (AKTC) focuses on the
                    physical, social, cultural and economic revitalisation of
                    communities in the developing world. It includes the Aga
                    Khan Award for Architecture
                  </CardBody>
                </Card>
              </Collapse>
            </Col>
          </Row>
        </Container>
        <Heading
          classes="bg-info pt -5-0 mt-5 rounded-0 text-white text-center mb-0"
          h1="pb-2 font-weight-bolder"
          title={Servicess.title}
          content={Servicess.content}
        />
      </div>

      {/* footer start form here  */}
      <Footer classes="p-3 bg-dark rounded-0 my-0 d-block" />
    </div>
  );
};
export default Service;
