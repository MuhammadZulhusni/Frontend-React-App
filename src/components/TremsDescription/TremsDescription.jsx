// Import necessary modules
import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import parse from 'html-react-parser';
import Loading from '../Loading/Loading';
import WentWrong from '../WentWrong/WentWrong';
import { Fade } from 'react-awesome-reveal'; 

class TermsDescription extends Component {
     constructor() {
          super();
          this.state = {
               termsdesc: "...",
               loading: true,
               error: false
          };
     }

     componentDidMount() {
          RestClient.GetRequest(AppUrl.Information)
               .then(result => {
                    if (result && result[0] && result[0]['trems']) {
                         this.setState({
                              termsdesc: result[0]['trems'],
                              loading: false,
                              error: false
                         });
                    } else {
                         this.setState({ error: true, loading: false });
                         console.error("API returned null or missing 'trems' data for terms description.");
                    }
               })
               .catch(error => {
                    console.error("Error fetching terms description:", error);
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
                                             <h1 className="serviceName">Terms and Conditions</h1>
                                             <hr />
                                        </Fade>
                                        <Fade triggerOnce delay={100}>
                                             <p className="serviceDescription">
                                                  {parse(this.state.termsdesc)}
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

export default TermsDescription;
