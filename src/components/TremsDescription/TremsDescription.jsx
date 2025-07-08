// Import necessary modules
import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import parse from 'html-react-parser'; // Import modern HTML parser

class TermsDescription extends Component {
     constructor() {
          super();
          // Initialize the state with default placeholder text
          this.state = { 
               termsdesc: "..."
          };
     }

     // Fetch data from API after the component mounts
     componentDidMount() {          
          RestClient.GetRequest(AppUrl.Information).then(result => {
               // Set the state with the 'trems' field from the API
               this.setState({ termsdesc: result[0]['trems'] }); // Keep 'trems' if that's how it's spelled in your API
          }); 
     }

     // Render the UI
     render() {
          return (
               <Fragment>
                    <Container className="mt-5">
                         <Row>
                              <Col lg={12} md={12} sm={12}>
                                   {/* Section title */}
                                   <h1 className="serviceName">Terms and Conditions</h1>
                                   <hr />
                                   {/* Render HTML content using parser */}
                                   <p className="serviceDescription">
                                        { parse(this.state.termsdesc) }
                                   </p>
                              </Col>
                         </Row>
                    </Container>
               </Fragment>
          );
     }
}

// Export the component so it can be used in other files
export default TermsDescription;
