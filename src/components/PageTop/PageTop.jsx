// Import React and necessary components
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

// PageTop component displays a full-width top section with a title
class PageTop extends Component {
     render() {
          return (
               // Fragment is used to avoid extra HTML tags
               <Fragment>

                 {/* Full-width container with custom class and no padding */}
                 <Container fluid={true} className="topFixedPage p-0" >

                      {/* Overlay background for the top section */}
                      <div className="topPageOverlay">

                        {/* Inner container to hold the title content */}
                        <Container className="topContentPage">
                             <Row>
                                  <Col className="text-center">

                                      {/* Page title passed from props */}
                                      <h4 className="topPageTitle">{this.props.pagetitle}</h4>

                                  </Col>
                             </Row> 
                        </Container> 

                      </div>

                 </Container>

               </Fragment>
          )
     }
}

// Export the component so it can be used in other pages
export default PageTop
