// Import React and tools to build the component
import React, { Component, Fragment } from 'react'

// Import layout components from react-bootstrap
import { Col, Container, Row } from 'react-bootstrap'

// Import service icons (images)
import designIcon from '../../asset/image/design.png';
import ecommerceIcon from '../../asset/image/ecommerce.png';
import webIcon from '../../asset/image/web.png';

// Create a class component called Services
class Services extends Component {
     render() {
          return (
               <Fragment>
                    {/* Main container with center alignment */}
                    <Container className="text-center">

                         {/* Section title */}
                         <h1 className="serviceMainTitle">MY SERVICES</h1>
                         <div className="bottom"></div>

                         {/* Bootstrap row to layout 3 columns */}
                         <Row>  

                              {/* First service - Ecommerce */}
                              <Col lg={4} md={6} sm={12}>
                                   <div className="serviceCard text-center">
                                        <img className="ecommerceIcon" src={ecommerceIcon} alt="Ecommerce Icon" /> 
                                        <h2 className="serviceName">Ecommerce</h2>
                                        <p className="serviceDescription">
                                             I will design and develop ecommerce online store website.
                                        </p>
                                   </div>
                              </Col> 

                              {/* Second service - Web Design */}
                              <Col lg={4} md={6} sm={12}>
                                   <div className="serviceCard text-center">
                                        <img className="designIcon" src={designIcon} alt="Design Icon" />
                                        <h2 className="serviceName">Web Design</h2>
                                        <p className="serviceDescription">
                                             Qualified web design and attractive effects which catches visitor’s Eye.
                                        </p> 
                                   </div>
                              </Col>

                              {/* Third service - Web Development */}
                              <Col lg={4} md={6} sm={12}>
                                   <div className="serviceCard text-center">
                                        <img className="webIcon" src={webIcon} alt="Web Development Icon" /> 
                                        <h2 className="serviceName">Web Development</h2>
                                        <p className="serviceDescription">
                                             Clean and fresh issue free code to make your website dynamic perfectly.
                                        </p>
                                   </div>
                              </Col>

                         </Row>
                    </Container>
               </Fragment>
          )
     }
}

// Export this component so it can be used in other files
export default Services
