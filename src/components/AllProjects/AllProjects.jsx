import React, { Component, Fragment } from 'react'; // Imports React core and utility components
import { Card, Col, Container, Row, Button } from 'react-bootstrap'; // Imports Bootstrap components
import { Link } from 'react-router-dom'; // Imports Link component for navigation
import RestClient from '../../RestAPI/RestClient'; // Imports custom REST API client
import AppUrl from '../../RestAPI/AppUrl'; // Imports API URL configurations
import Loading from '../Loading/Loading'; // Imports custom loading component
import WentWrong from '../WentWrong/WentWrong'; // Imports error display component
import { Fade } from 'react-awesome-reveal'; 

/**
 * AllProjects component: Fetches and displays a list of all projects.
 * Incorporates loading and error handling states for a robust user experience.
 */
class AllProjects extends Component {
  constructor() {
    super();
    this.state = {
      myData: [],
      loading: true,
      error: false
    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.ProjectAll)
      .then(result => {
        if (Array.isArray(result)) {
          this.setState({
            myData: result,
            loading: false,
            error: false
          });
        } else {
          console.error("API returned unexpected data for All Projects:", result);
          this.setState({ error: true, loading: false });
        }
      })
      .catch(error => {
        console.error("Error fetching project data:", error);
        this.setState({
          loading: false,
          error: true
        });
      });
  }

  render() {
    if (this.state.loading === true) {
      return <Loading />;
    } else if (this.state.error === true) {
      return <WentWrong />;
    } else {
      const MyList = this.state.myData;

      const MyView = MyList.map((item, index) => {
        return (
          <Col lg={4} md={6} sm={12} key={index}>
            <Fade direction="up" triggerOnce cascade damping={0.1}>
              <Card className="projectCard">
                <Card.Img variant="top" src={item.img_one} alt={item.project_name} />
                <Card.Body>
                  <Card.Title className="serviceName">{item.project_name}</Card.Title>
                  <Card.Text className="serviceDescription">
                    {item.project_description}
                  </Card.Text>
                  <Button variant="primary">
                    <Link
                      className="link-style"
                      to={`/projectdetails/${item.id}/${item.project_name.replace(/\s+/g, '-').toLowerCase()}`}
                    >
                      View More
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
        );
      });

      return (
        <Fragment>
          <Container className="text-center">
            <h1 className="serviceMainTitle">RECENT PROJECTS</h1>
            <div className="bottom"></div>
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
