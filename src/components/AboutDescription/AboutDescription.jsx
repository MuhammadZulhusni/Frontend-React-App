import React, { Component, Fragment } from 'react'; // Import React core
import { Col, Container, Row } from 'react-bootstrap'; // Import Bootstrap layout components
import RestClient from '../../RestAPI/RestClient'; // Import custom REST API client
import AppUrl from '../../RestAPI/AppUrl'; // Import API URL configurations
import parse from 'html-react-parser'; // Import modern HTML parser
import Loading from '../Loading/Loading';

class AboutDescription extends Component {
     constructor() {
          super();
          // Initialize component state
          this.state = { 
               aboutdesc: "...",
               loading:true
          };
     }

     // Fetch data from API after component mounts
     componentDidMount() {          
          RestClient.GetRequest(AppUrl.Information).then(result => {
               // Update state with the 'about' description from the API
               this.setState({aboutdesc:result[0]['about'],loading:false});
          });
     }

     // Render method to display component content
     render() {
          if(this.state.loading == true){
               return <Loading />
          }
          else{ 

               return (
                    <Fragment>
                         <Container className="mt-5">
                              <Row>
                                   <Col sm={12} lg={12} md={12}>
                                        {/* Parse and render HTML content */}
                                        { parse(this.state.aboutdesc) }
                                   </Col>
                              </Row>
                         </Container>
                    </Fragment>
               );
          }
     }
}

export default AboutDescription; // Export component for use in other files
