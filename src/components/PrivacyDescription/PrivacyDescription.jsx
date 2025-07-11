// Import necessary modules from React and Bootstrap
import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// Import custom API client and API URL
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

// Import modern HTML parser to render HTML content as React elements
import parse from 'html-react-parser';

import Loading from '../Loading/Loading';

class PrivacyDescription extends Component {
     constructor() {
          super();
          // Initialize state with default placeholder
          this.state = { 
               privacydesc: "...",
               loading:true
          };
     }

     // When the component mounts, fetch data from the API
     componentDidMount() {          
          RestClient.GetRequest(AppUrl.Information).then(result => {
               // Update state with 'privacy' content from API response
               this.setState({privacydesc:result[0]['privacy'],loading:false});
          }); 
     }

     // Render the component UI
     render() {
               if(this.state.loading == true){
                    return <Loading />
               }
               else{ 

               return (
                    <Fragment>
                         <Container className="mt-5">
                              <Row>
                                   <Col lg={12} md={12} sm={12}>
                                        {/* Title */}
                                        <h1 className="serviceName">Privacy And Policy</h1>
                                        <hr />
                                        {/* Render HTML content from API */}
                                        <p className="serviceDescription">
                                             { parse(this.state.privacydesc) }
                                        </p>
                                   </Col>
                              </Row>
                         </Container>
                    </Fragment>
               );
          }
     }
}

// Export the component so it can be used in other parts of the app
export default PrivacyDescription;
