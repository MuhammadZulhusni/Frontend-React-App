// Import required tools from React
import React, { Component, Fragment } from 'react'

// Import layout and button components from react-bootstrap
import { Col, Container, Row, Button } from 'react-bootstrap'

// Import axios (not used here but can be used for API requests)
import axios from 'axios';

// Import helper files for API request
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

// Create a class component named TopBanner
class TopBanner extends Component {

     // Initialize state with default title and subtitle
     constructor(){
          super();
          this.state={
               title:".....",      // Default title before loading
               subtitle:"....."    // Default subtitle before loading
          }
     }

     // This function runs after the component is shown on the screen
     componentDidMount(){
          // Get data from API and update the state
          RestClient.GetRequest(AppUrl.HomeTopTitle).then(result=>{
               this.setState({
                    title: result[0]['home_title'],
                    subtitle: result[0]['home_subtitle']
               });
          }).catch(error=>{
              // If there's an error, show fallback text
              this.setState({
                  title: "????",
                  subtitle: "????"
              })
          });
     }

     // Renders the component UI
     render() {
          return (
               <Fragment>
                    {/* Full-width banner section */}
                    <Container fluid={true} className="topFixedBanner p-0" >
                         
                         {/* Overlay on top of banner image */}
                         <div className="topBannerOverlay">

                              {/* Inner content area for text */}
                              <Container className="topContent">
                                   <Row>
                                        <Col className="text-center">
                                            
                                            {/* Show title and subtitle from state */}
                                            <h1 className="topTitle">{this.state.title}</h1>
                                            <h4 className="topSubTitle">{this.state.subtitle}</h4>
                                            
                                            {/* Button below the text */}
                                            <Button variant="primary">Learn More</Button>

                                        </Col>
                                   </Row> 
                              </Container> 
                         </div>

                    </Container>
               </Fragment>
          )
     }
}

// Export this component so it can be used in other files
export default TopBanner
