// Import React and needed components
import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// Import API helper files
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

// Create a class component called Courses
class Courses extends Component {

     // Set initial state
     constructor(){
          super();
          this.state = {
               myData: [] // This will hold the course data from the API
          }
     }

     // This function runs after the component is added to the page
     componentDidMount(){
          // Get course data from the API and update the state
          RestClient.GetRequest(AppUrl.CourseHome).then(result => {
               this.setState({ myData: result });
          }) 
     }

     // This function decides what to display on the page
     render() {
          // Store the course list from API
          const MyList = this.state.myData;

          // Map through the course list and create UI elements
          const MyView = MyList.map(MyList => {
            return (
              <Col lg={6} md={12} sm={12}>
                <Row>
                  {/* Left side - image */}
                  <Col lg={6} md={6} sm={12} className="p-2">
                    <img className="courseImg" src={MyList.small_img} />
                  </Col>

                  {/* Right side - title, description, and link */}
                  <Col lg={6} md={6} sm={12}>
                    <h5 className="text-justify serviceName">{MyList.short_title}</h5>
                    <p className="text-justify serviceDescription">{MyList.short_description}</p>
                    <Link className="courseViewMore float-left" to="/coursedetails">
                      View Details
                    </Link>
                  </Col>
                </Row>
              </Col>
            )
          })

          // Return the full layout
          return (
            <Fragment>
              {/* Main container for courses section */}
              <Container className="text-center">
                
                {/* Section title */}
                <h1 className="serviceMainTitle">MY COURSES</h1>
                <div className="bottom"></div>

                {/* Display course cards */}
                <Row>
                  {MyView}
                </Row>

              </Container>
            </Fragment>
          )
     }
}

// Export the component so it can be used in other files
export default Courses
