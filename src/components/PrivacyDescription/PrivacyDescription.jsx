// Import necessary modules from React and Bootstrap
import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// Import custom API client and API URL
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

// Import modern HTML parser to render HTML content as React elements
import parse from 'html-react-parser';

// Import custom loading and error components
import Loading from '../Loading/Loading';
import WentWrong from '../WentWrong/WentWrong'; 

// Import animation
import { Fade } from 'react-awesome-reveal';

/**
 * PrivacyDescription component: Fetches and displays the Privacy Policy
 * content from an API. Includes loading and error states for a robust user experience.
 */
class PrivacyDescription extends Component {
     constructor() {
          super();
          this.state = {
               privacydesc: "...",
               loading: true,
               error: false
          };
     }

     componentDidMount() {
          RestClient.GetRequest(AppUrl.Information)
               .then(result => {
                    if (result && result[0] && result[0]['privacy']) {
                         this.setState({
                              privacydesc: result[0]['privacy'],
                              loading: false,
                              error: false
                         });
                    } else {
                         console.error("API returned null or missing 'privacy' data for Privacy Description.");
                         this.setState({ error: true, loading: false });
                    }
               })
               .catch(error => {
                    console.error("Error fetching privacy description:", error);
                    this.setState({ error: true, loading: false });
               });
     }

     render() {
          if (this.state.loading === true) {
               return <Loading />;
          } else if (this.state.error === true) {
               return <WentWrong />;
          } else {
               return (
                    <Fragment>
                         <Container className="mt-5">
                              <Row>
                                   <Col lg={12} md={12} sm={12}>
                                        <Fade direction="up" triggerOnce>
                                             <h1 className="serviceName">Privacy And Policy</h1>
                                             <hr />
                                        </Fade>
                                        <Fade delay={100} triggerOnce>
                                             <p className="serviceDescription">
                                                  {parse(this.state.privacydesc)}
                                             </p>
                                        </Fade>
                                   </Col>
                              </Row>
                         </Container>
                    </Fragment>
               );
          }
     }
}

export default PrivacyDescription;
