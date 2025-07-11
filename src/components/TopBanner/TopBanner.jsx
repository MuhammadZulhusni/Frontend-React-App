import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import axios from 'axios'; // axios is imported but not used directly in this snippet
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading'; // Import the Loading component

// TopBanner component displays a banner with a title, subtitle, and a "Learn More" button.
// It fetches the title and subtitle from an API and shows a loading animation while doing so.
class TopBanner extends Component {

     // Initializes the component's state.
     // 'title' and 'subtitle' hold the banner text.
     // 'loaderClass' controls the visibility of the loading animation.
     // 'mainDivClass' controls the visibility of the main banner content.
     constructor(){
          super();
          this.state={
               title:".....",      // Default placeholder title
               subtitle:".....",    // Default placeholder subtitle
               loaderClass:"text-center", // Initially show loader (centered)
               mainDivClass:"d-none"      // Initially hide main content
          }
     }

     // Lifecycle method: Called after the component mounts to the DOM.
     // This is where API calls are typically made.
     componentDidMount(){
          // Fetch banner title and subtitle from the API.
          RestClient.GetRequest(AppUrl.HomeTopTitle).then(result=>{
               // On successful fetch, update state with actual data.
               // Hide the loader and show the main content.
               this.setState({
                    title:result[0]['home_title'],
                    subtitle:result[0]['home_subtitle'],
                    loaderClass:"d-none",      // Hide loader
                    mainDivClass:"text-center" // Show main content (centered)
               });
          }).catch(error=>{
              // On error, set fallback text and hide loader, show main content (with error text).
              this.setState({
                  title: "????",
                  subtitle: "????",
                  loaderClass:"d-none",      // Hide loader
                  mainDivClass:"text-center" // Show main content (with error placeholders)
              })
          });
     }

     // Renders the component's UI.
     render() {
          return (
               <Fragment>
                    {/* Full-width banner section with no padding */}
                    <Container fluid={true} className="topFixedBanner p-0" >
                         
                         {/* Overlay div for styling (e.g., darkening the background image) */}
                         <div className="topBannerOverlay">

                              {/* Inner container for content, vertically centered */}
                              <Container className="topContent">
                                   <Row>
                                        {/* Column for the loading animation. Its visibility is controlled by 'loaderClass'. */}
                                        <Col className={this.state.loaderClass}>
                                            <Loading/> {/* The Loading component */}
                                        </Col>

                                        {/* Column for the main banner content. Its visibility is controlled by 'mainDivClass'. */}
                                        <Col className={this.state.mainDivClass}>
                                            {/* Displays title and subtitle from component state */}
                                            <h1 className="topTitle">{this.state.title}</h1>
                                            <h4 className="topSubTitle">{this.state.subtitle}</h4>
                                            
                                            {/* "Learn More" button */}
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

export default TopBanner; // Exports the TopBanner component for use in other parts of the application.