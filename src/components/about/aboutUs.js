import React from "react";
import Heading from "../Heading/heading";
import Footer from "../footer/footer";
import { Container, Row, Col } from "reactstrap";
import doctorpic from "../../assets/Quality.jpg";

const About = () => {
  console.log("About Page Rendering");
  const data = {
    title: "About Our Services",
    content: `Aga Khan University Hospitals in Karachi, Pakistan and Nairobi,
        Kenya are private, not-for-profit institutions providing high
         quality health care. The Main Hospitals serve as the principal and Our Quality 
         and Patient Safety team at the 
         Aga Khan University Hospital have excessive training and experience in managing
          sites for clinical training for the University's Medical Colleges
           and Schools of Nursing and Midwifery in Pakistan and East Africa.`
  };
  const service = {
    title: "​World Class Quality Health Services",
    content: `
        The Aga Khan University Hospital strives to maintain the highest standards of safe and quality 
        health care for all patients, in all our facilities. Our Quality and Patient Safety team at the 
        Aga Khan University Hospital have excessive training and experience in managing and ensuring the
         highest Quality Standards within our facilities and systems to ensure patient safety. We ensure that
          proper checks and balances are followed in all aspects of the delivery of our healthcare services, 
          including Infection Control.
        `
  };
  return (
    <div>
      {/* content and ifram Container  */}
      <Container>
        {/* Container Row */}
        <Row>
          <Col xs="12" sm="12" md="12" lg="6" xl="6">
            <iframe
              title="Youtube Intro about Doctor"
              className="my-5"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/clys3BB7AkU"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </Col>
          <Col xs="12" sm="12" md="12" lg="6" xl="6">
            <Heading
              classes="bg-white my-5 py-0 rounded-0"
              h1="font-weight-bolder"
              title={data.title}
              content={data.content}
            />
          </Col>
        </Row>
      </Container>

      {/* content start from Here */}
      <div className="bg-light">
        <Container>
          <Row>
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
              <Heading
                classes="bg-light pl-0 my-5 py-0 rounded-0"
                h3="font-weight-bolder"
                title={service.title}
                content={service.content}
              />
            </Col>
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
              {/* card Component */}
              <img
                src={doctorpic}
                className="d-block w-100 h-auto pt-5"
                alt="Doctor pic"
              />
            </Col>
          </Row>
        </Container>
        {/* card Component */}
        <Heading
          classes="bg-white mb-0 rounded-0 "
          h1="font-weight-bolder "
          title={service.title}
          content={data.content}
        />
        {/* card Component */}
        <Heading
          classes="bg-info rounded-0 text-white mb-0"
          h1=" font-weight-bolder text-center"
          title={data.title}
          content={service.content}
        />
      </div>

      {/* footer start form here  */}
      <Footer classes="p-3 bg-dark rounded-0 my-0 d-block" />


      
    </div>
  );
};
export default About;
