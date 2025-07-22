import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';
import { Fade } from 'react-awesome-reveal';
import '../../asset/css/courses.css';

class Courses extends Component {
  constructor() {
    super();
    this.state = {
      myData: [],
      loading: true
    };
  }

componentDidMount() {
  RestClient.GetRequest(AppUrl.CourseHome)
    .then(result => {
      this.setState({ myData: Array.isArray(result) ? result : [], loading: false });
    })
    .catch(() => {
      this.setState({ myData: [], loading: false });
    });
}

  render() {
    if (this.state.loading === true) {
      return <Loading />;
    } else {
      const MyList = this.state.myData;

      const MyView = MyList.map((courseItem) => {
        return (
          <Col lg={6} md={12} sm={12} key={courseItem.id} className="mb-4">
            <Fade direction="up" triggerOnce>
              <div className="course-card">
                <Row className="align-items-center">
                  <Col lg={6} md={6} sm={12} className="course-image-col">
                    <div className="course-image-wrapper">
                      <img
                        className="course-img"
                        src={courseItem.small_img}
                        alt={courseItem.short_title}
                      />
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={12} className="course-content">
                    <h5 className="course-title">
                      {courseItem.short_title}
                    </h5>
                    <p className="course-description">
                      {courseItem.short_description}
                    </p>
                    <Link
                      className="course-btn"
                      to={`/coursedetails/${courseItem.id}/${encodeURIComponent(
                        courseItem.short_title.replace(/\s+/g, '-').toLowerCase()
                      )}`}
                    >
                      View Details →
                    </Link>
                  </Col>
                </Row>
              </div>
            </Fade>
          </Col>
        );
      });

      return (
        <Fragment>
          <section className="courses-section py-5">
            <Container>
              <div className="text-center mb-5">
                <Fade triggerOnce>
                  <h1 className="section-title">MY COURSES</h1>
                  <div className="title-underline"></div>
                </Fade>
              </div>
              <Row>{MyView}</Row>
            </Container>
          </section>
        </Fragment>
      );
    }
  }
}

export default Courses;