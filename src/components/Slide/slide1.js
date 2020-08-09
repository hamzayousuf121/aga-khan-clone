import React, { Component } from 'react'
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView,
  } from "mdbreact";
import baner1 from "../../assets/homepagebanner1.jpg"
import baner2 from "../../assets/Pic2.jpg"
import baner3 from "../../assets/heartcancer.jpg";
import baner4 from "../../assets/AE Edited 1500px.jpg";
import baner5 from "../../assets/Casualty slider photo 2.jpg";

class slide1 extends Component {
    render() {
        return (
            <div>
          <MDBCarousel
          interval={1500}
          activeItem={1}
          length={5}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={baner1}
                  alt="First slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={baner2}
                  alt="Second slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={baner3}
                  alt="third slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="4">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={baner4}
                  alt="fourth slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="5">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={baner5}
                  alt="fifth slide"
                />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
       
            </div>
        )
    }
}

export default slide1
