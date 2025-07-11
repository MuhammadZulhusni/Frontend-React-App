// Import React and needed components
import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// Import API helper files
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

import Loading from '../Loading/Loading';

// Create a class component called RecentProject
class RecentProject extends Component {

  // Set initial state
  constructor(){
    super();
    this.state = {
      myData: [], // This will hold the project data from the API
      loading:true 
    }
  }

  // This function runs after the component is added to the page
  componentDidMount(){
    // Get data from the API and update the state
    RestClient.GetRequest(AppUrl.ProjectHome).then(result => {
      this.setState({myData:result,loading:false});
    });
  }

  // This function decides what to display on the page
  render() {
      if(this.state.loading == true){
            return <Loading />
      }
      else{ 
    // Store the API data
    const MyList = this.state.myData;

      // Loop through the data and generate UI elements
      const MyView = MyList.map(MyList => {
        return (
          <Col lg={4} md={6} sm={12}>
            {/* Bootstrap card to show each project */}
            <Card className="projectCard">
              {/* Image from API */}
              <Card.Img variant="top" src={MyList.img_one} />
              
              <Card.Body>
                {/* Project title */}
                <Card.Title className="serviceName">{MyList.project_name}</Card.Title>
                
                {/* Project description */}
                <Card.Text className="serviceDescription">
                  {MyList.project_description}
                </Card.Text>
                
                {/* View More button that links to the project details page */}
                <Button variant="primary">
                  <Link className="link-style" to={"/projectdetails/"+MyList.id+"/"+MyList.project_name}> View More </Link>  
                </Button>
              </Card.Body>
            </Card>
          </Col>
        )
      });

      // Return the full layout
      return (
        <Fragment>
          {/* Main container for the recent projects section */}
          <Container className="text-center">
            {/* Section title */}
            <h1 className="serviceMainTitle">RECENT PROJECTS</h1>
            <div className="bottom"></div>

            {/* Display each project in a responsive row */}
            <Row>
              {MyView}
            </Row>
          </Container>
        </Fragment>
      )
    }
  }
}

// Export the component so it can be used in other files
export default RecentProject
