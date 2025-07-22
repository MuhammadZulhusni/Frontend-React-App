import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

import Loading from '../Loading/Loading';
import { Fade } from 'react-awesome-reveal';


class ClientReview extends Component {
  constructor() {
    super();
    this.state = {
      myData: [],
      loading: true
    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.ClientReview).then(result => {
      this.setState({ myData: result, loading: false });
    });
  }

  render() {
    if (this.state.loading === true) {
      return <Loading />;
    } else {
      const settings = {
        autoPlaySpeed: 5000,
        autoPlay: true,
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        vertical: false,
        verticalSwiping: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        cssEase: 'ease-in-out',
        lazyLoad: 'ondemand',
        pauseOnHover: true,
        responsive: [
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
              initialSlide: 0
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

      const MyList = this.state.myData;

      const MyView = MyList.map((review, index) => {
        return (
          <div key={index} className="testimonial-slide">
            <Row className="text-center justify-content-center">
              <Col lg={8} md={10} sm={12}>
                <div className="testimonial-card">
                  <img 
                    className="client-avatar" 
                    src={review.client_img} 
                    alt={review.client_title}
                    loading="lazy"
                  />
                  <p className="testimonial-text">"{review.client_description}"</p>
                  <h4 className="client-name">{review.client_title}</h4>
                  <div className="stars">★★★★★</div>
                </div>
              </Col>
            </Row>
          </div>
        );
      });

      return (
        <Fragment>
          <section className="testimonial-section">
            <Container fluid={true} className="testimonial-container">
              <Fade triggerOnce>
                <div className="section-header">
                  <h2 className="section-title">What Our Clients Say</h2>
                  <div className="title-underline"></div>
                  <p className="section-subtitle2">Real feedback from our valued customers</p>
                </div>
              </Fade>

              <div className="testimonial-slider">
                <Slider {...settings}>
                  {MyView}
                </Slider>
              </div>
            </Container>
          </section>
        </Fragment>
      );
    }
  }
}

export default ClientReview;