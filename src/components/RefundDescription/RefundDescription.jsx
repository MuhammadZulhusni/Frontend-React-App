// Import necessary modules from React and Bootstrap
import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// Import custom REST API utilities
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

// Import modern HTML parser to safely render HTML strings
import parse from 'html-react-parser';

// Import custom loading and error components
import Loading from '../Loading/Loading';
import WentWrong from '../WentWrong/WentWrong'; 

// Import reveal animation
import { Fade } from 'react-awesome-reveal';

class RefundDescription extends Component {
     constructor() {
          super();
          this.state = {
               refunddesc: "...",
               loading: true,
               error: false
          };
     }

     componentDidMount() {
          RestClient.GetRequest(AppUrl.Information)
               .then(result => {
                    if (result && result[0] && result[0]['refund']) {
                         this.setState({
                              refunddesc: result[0]['refund'],
                              loading: false,
                              error: false
                         });
                    } else {
                         console.error("API returned null or missing 'refund' data for Refund Description.");
                         this.setState({ error: true, loading: false });
                    }
               })
               .catch(error => {
                    console.error("Error fetching refund description:", error);
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
                                        <Fade triggerOnce direction="up">
                                             <h1 className="serviceName">Data Protection Principles</h1>
                                             <hr />
                                        </Fade>
                                        <Fade triggerOnce delay={100}>
                                             <p className="serviceDescription">
                                                  {parse(this.state.refunddesc)}
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

export default RefundDescription;
