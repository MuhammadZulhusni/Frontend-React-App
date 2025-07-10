import React, { Component, Fragment } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';

class AllProjects extends Component {
  constructor() {
    super();
    // State to store project data
    this.state = {
      myData: [],
      myData:[],
      loading:true 
    };
  }

  componentDidMount() {
    // Call API to fetch all project data
    RestClient.GetRequest(AppUrl.ProjectAll).then(result => {
      // If data is returned, store in state
      if (result) {
        this.setState({myData:result,loading:false});
      }
    });
  }

  render() {
      if(this.state.loading == true){
            return <Loading />
      }
      else{ 

      // Get data from state
      const MyList = this.state.myData;

      // Loop through the project list and create card for each
      const MyView = MyList.map((item, index) => {
        return (
          <Col lg={4} md={6} sm={12} key={index}>
            {/* Project card */}
            <Card className="projectCard">
              <Card.Img variant="top" src={item.img_one} />
              <Card.Body>
                <Card.Title className="serviceName">{item.project_name}</Card.Title>
                <Card.Text className="serviceDescription">
                  {item.project_description}
                </Card.Text>
                {/* Button to view more (navigate to project details page) */}
                <Button variant="primary">
                  <Link className="link-style" to={"/projectdetails/"+item.id+"/"+item.project_name}> View More </Link> 
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
      });

      return (
        <Fragment>
          <Container className="text-center">
            {/* Section heading */}
            <h1 className="serviceMainTitle">RECENT PROJECTS</h1>
            <div className="bottom"></div>
            {/* Display all project cards */}
            <Row>
              {MyView}
            </Row>
          </Container>
        </Fragment>
      );
    }
  }
}

export default AllProjects;
