import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LoaderIcon from '../../asset/image/loader.svg'; 

class Loading extends Component {
     render() {
          return (
               // Uses a div instead of Fragment when a single root element is desired
               <div className="loading-container text-center py-5">
                    <Container>
                         <Row className="justify-content-center"> {/* Center content */}
                              <Col xs={12}> {/* Use xs={12} to ensure it takes full width on small screens */}
                                  <img className="LoaderAnimation" src={LoaderIcon} alt="Loading animation" />
                              </Col>
                         </Row>
                    </Container>
               </div>
          );
     }
}

export default Loading;