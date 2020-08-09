import React from "react";
import Footer from "../footer/footer";
const Contact = () => {
  return (
    <React.Fragment>
      <div className="container">
        <br />
        <h1 className="text-danger"> ​Contact Us </h1>
        <br />
        <div className="border border-bottom-3"></div>
        <br />
        <h3 className="text-dark">Aga Khan University Hospital, Karachi</h3>
        <br />
        <p>Aga Khan University Hospital, Karachi</p>
        <p>Stadium Road, P.O. Box 3500</p>
        <p>Karac​​​hi 74800, Pakistan</p>
        <p>Tel: +92 21 111-911-911</p>
        <p>Fax: +92 21 3493 4294, 3493 2095</p>
        <p>Email: ​akuh.information​@aku.edu​</p>
        <h3 className="text-dark">Aga Khan University Hospital, Nairobi</h3>
        <br />
        <p>3rd Parklands Avenue, Limuru Road,</p>
        <p>Airobi, Kenya</p>
        <p>Email: akuh.nairobi@aku.edu​​​​</p>
        <p>Phone: +254 (0) 20 366 2000</p>
        <h2 className="bg-danger text-white text-center">
          Aga Khan Karachi Google Map
        </h2>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14476.697852780217!2d67.074753!3d24.89203!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x95854329956118e7!2sAga%20Khan%20University%20Hospital%2C%20Pakistan!5e0!3m2!1sen!2s!4v1576278476406!5m2!1sen!2s" allowfullscreen title="This is google aga khan Map"
            alt="This is google aga khan Map"></iframe>
        </div>
        <br />
      </div>

      <Footer classes="bg-dark py-3" />
    </React.Fragment>
  );
};
export default Contact;
