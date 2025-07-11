// Import React and needed components
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

// Import Slick carousel styles
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"

// Import Slider component from react-slick
import Slider from "react-slick"

// Import API helper files
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

import Loading from '../Loading/Loading';

// Create a class component called ClientReview
class ClientReview extends Component {

  // Set initial state
  constructor(){
    super();
    this.state = {
      myData: [], // This will hold the client review data from API
      loading:true 
    }
  }

  // This function runs after the component is added to the page
  componentDidMount(){
    // Fetch client review data from the API
    RestClient.GetRequest(AppUrl.ClientReview).then(result => {
      this.setState({myData:result,loading:false});
    }) 
  }

  // This function decides what to display on the page
  render() {
    if(this.state.loading == true){
          return <Loading />
    }
    else{ 
      // Slider configuration settings
      var settings = {
        autoPlaySpeed: 3000,
        autoPlay: true,
        dots: true,
        infinite: true,
        speed: 3000,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
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
      }

      // Store API response
      const MyList = this.state.myData;

      // Generate slider views for each client review
      const MyView = MyList.map(MyList => {
        return (
          <div>
            {/* Centered row for each review */}
            <Row className="text-center justify-content-center">
              <Col lg={6} md={6} sm={12}>
                {/* Client image, name, and review text */}
                <img className="circleImg" src={MyList.client_img} />
                <h2 className="reviewName">{MyList.client_title}</h2>
                <p className="reviewDescription">{MyList.client_description}</p>
              </Col>
            </Row>
          </div>
        )
      })

      // Return the full layout
      return (
        <Fragment>
          {/* Main container with background and center alignment */}
          <Container fluid={true} className="siderBack text-center">

            {/* Section title */}
            <h1 className="reviewMainTitle p-3">TESTIMONIAL</h1>
            <div className="reviewbottom"></div> 

            {/* Slick slider with reviews */}
            <Slider {...settings}>
              {MyView}
            </Slider>

          </Container>
        </Fragment>
      )
    }
  }
}

// Export the component so it can be used in other files
export default ClientReview
