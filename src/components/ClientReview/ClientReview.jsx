import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// Slick carousel CSS styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Slick slider component
import Slider from "react-slick";

class ClientReview extends Component {
  render() {
    // Slider settings
    var settings = {
      autoPlaySpeed: 3000,           // Speed between slides
      autoPlay: true,                // Auto play enabled
      dots: true,                    // Show navigation dots
      infinite: true,                // Infinite looping
      speed: 3000,                   // Slide animation speed
      arrows: false,                 // Hide navigation arrows
      vertical: true,                // Vertical sliding
      verticalSwiping: true,         // Enable swipe vertically
      slidesToShow: 1,               // Show 1 review at a time
      slidesToScroll: 1,             // Scroll 1 slide at a time
      initialSlide: 1,               // Start from second slide (index 1)
      responsive: [                  // Responsive behavior for different screen sizes
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <Fragment>
        {/* Main container with background */}
        <Container fluid={true} className="siderBack text-center">
          {/* Section title */}
          <h1 className="reviewMainTitle p-3">TESTIMONIAL</h1>
          <div className="reviewbottom"></div>

          {/* Slick carousel with reviews */}
          <Slider {...settings}>

            {/* Review 1 */}
            <div>
              <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                  <img
                    className="circleImg"
                    src="https://image.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg"
                    alt="Client review"
                  />
                  <h2 className="reviewName">Kazi Ariyan</h2>
                  <p className="reviewDescription">
                    Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for teaching. I am a founder of eLe easy Learning and a passionate Web Developer, Programmer & Instructor.
                  </p>
                </Col>
              </Row>
            </div>

            {/* Review 2 */}
            <div>
              <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                  <img
                    className="circleImg"
                    src="https://image.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
                    alt="Client review"
                  />
                  <h2 className="reviewName">Jack Ma</h2>
                  <p className="reviewDescription">
                    Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for teaching. I am a founder of eLe easy Learning and a passionate Web Developer, Programmer & Instructor.
                  </p>
                </Col>
              </Row>
            </div>

            {/* Review 3 */}
            <div>
              <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                  <img
                    className="circleImg"
                    src="https://image.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg"
                    alt="Client review"
                  />
                  <h2 className="reviewName">Jhon</h2>
                  <p className="reviewDescription">
                    Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for teaching. I am a founder of eLe easy Learning and a passionate Web Developer, Programmer & Instructor.
                  </p>
                </Col>
              </Row>
            </div>

          </Slider>
        </Container>
      </Fragment>
    );
  }
}

export default ClientReview;
