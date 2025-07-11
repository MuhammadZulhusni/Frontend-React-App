import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';
import { Fade } from 'react-awesome-reveal';

class AllCourses extends Component {
     constructor() {
          super();
          this.state = {
               myData: [],
               loading: true,
               error: false
          };
     }

     componentDidMount() {
          RestClient.GetRequest(AppUrl.CourseAll)
               .then(result => {
                    this.setState({
                         myData: result,
                         loading: false,
                         error: false
                    });
               })
               .catch(error => {
                    console.error("Error fetching courses:", error);
                    this.setState({
                         loading: false,
                         error: true
                    });
               });
     }

     render() {
          if (this.state.loading === true) {
               return <Loading />;
          }

          if (this.state.error === true) {
               return (
                    <Container className="text-center my-5">
                         <p className="text-danger lead">Failed to load courses. Please check your internet connection or try again later.</p>
                    </Container>
               );
          }

          const courseList = this.state.myData;

          const courseViews = courseList.map(courseItem => (
               <Col lg={6} md={12} sm={12} key={courseItem.id}>
                    <Fade direction="up" triggerOnce>
                         <Row>
                              <Col lg={6} md={6} sm={12} className="p-2">
                                   <img className="courseImg" src={courseItem.small_img} alt={courseItem.short_title} />
                              </Col>
                              <Col lg={6} md={6} sm={12}>
                                   <h5 className="text-justify serviceName">{courseItem.short_title}</h5>
                                   <p className="text-justify serviceDescription">{courseItem.short_description}</p>
                                   <Link
                                        className="courseViewMore float-left"
                                        to={`/coursedetails/${courseItem.id}/${encodeURIComponent(courseItem.short_title.replace(/\s+/g, '-').toLowerCase())}`}
                                   >
                                        View Details
                                   </Link>
                              </Col>
                         </Row>
                    </Fade>
               </Col>
          ));

          return (
               <Fragment>
                    <Container className="text-center">
                         <h1 className="serviceMainTitle">MY COURSES</h1>
                         <div className="bottom"></div>
                         <Row>
                              {courseViews}
                         </Row>
                    </Container>
               </Fragment>
          );
     }
}

export default AllCourses;
