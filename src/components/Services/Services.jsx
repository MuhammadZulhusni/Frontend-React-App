// Import required tools from React
import React, { Component, Fragment } from 'react'

// Import layout components from react-bootstrap
import { Col, Container, Row } from 'react-bootstrap'

// Import some local image assets (not used in the dynamic part)
import designIcon from '../../asset/image/design.png';
import ecommerceIcon from '../../asset/image/ecommerce.png';
import webIcon from '../../asset/image/web.png';

// Import API helper files
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

// Create a class component named Services
class Services extends Component {

     // Initialize state with an empty array to store service data
     constructor(){
          super();
          this.state={
               myData:[]  // Will hold data from API
          }
     }

     // This function runs after the component is mounted
     componentDidMount(){
          // Fetch data from the API and update the state
          RestClient.GetRequest(AppUrl.Services).then(result=>{
               this.setState({myData:result});
          }) 
     }

     // Render the component UI
     render() {

          // Store the service data in a variable
          const MyList = this.state.myData;

          // Map over the service data and create UI for each service
          const MyView = MyList.map(MyList=>{
               return (
                    <Col lg={4} md={6} sm={12}>
                         <div className="serviceCard text-center">
                              {/* Load logo from API */}
                              <img className="ecommerceIcon" src={MyList.service_logo} /> 
                              
                              {/* Show service name */}
                              <h2 className="serviceName">{MyList.service_name}</h2>
                              
                              {/* Show service description */}
                              <p className="serviceDescription">{MyList.service_description}</p>
                         </div>
                    </Col>  
               )
          });

          // Return the full UI
          return (
               <Fragment>
                    {/* Main container for services */}
                    <Container className="text-center">
                         {/* Section title */}
                         <h1 className="serviceMainTitle">MY SERVICES</h1>
                         <div className="bottom"></div>

                         {/* Display all services in a row */}
                         <Row>  
                              {MyView}
                         </Row>
                    </Container>
               </Fragment>
          )
     }
}

// Export the component so it can be used elsewhere
export default Services
