// Import necessary modules from React and Bootstrap
import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// Import custom REST API utilities
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

// Import modern HTML parser to safely render HTML strings
import parse from 'html-react-parser';
import Loading from '../Loading/Loading';
class RefundDescription extends Component {
     constructor() {
          super();
          // Initialize state with placeholder text
          this.state = { 
               refunddesc: "...",
               loading:true
          };
     }

     // Fetch refund description from API when component mounts
     componentDidMount() {          
          RestClient.GetRequest(AppUrl.Information).then(result => {
               // Update state with 'refund' field from API response
               this.setState({refunddesc:result[0]['refund'],loading:false});
          }); 
     }

     // Render the component
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
                                        {/* Section title */}
                                        <h1 className="serviceName">Data Protection Principles</h1>
                                        <hr />
                                        {/* Render HTML content from API */}
                                        <p className="serviceDescription">
                                             { parse(this.state.refunddesc) }
                                        </p>
                                   </Col>
                              </Row>
                         </Container>
                    </Fragment>
               );
          }
     }
}

// Export component for use in other parts of the application
export default RefundDescription;
