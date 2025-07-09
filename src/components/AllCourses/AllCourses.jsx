import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

class AllCourses extends Component {
     constructor(){
          super();
          // Initialize state to hold course data
          this.state={
               myData:[] 
          }
     }

     // Fetch course data after component mounts
     componentDidMount(){
          RestClient.GetRequest(AppUrl.CourseAll).then(result=>{
               // Set state with course data from API
               this.setState({myData:result});
          }) 
     }

     render() {
          // Store the course data
          const MyList = this.state.myData;

          // Loop through course data and create view for each
          const MyView = MyList.map(MyList=>{
             return (
               <Col lg={6} md={12} sm={12}>
                 <Row>
                   {/* Course Image */}
                   <Col lg={6} md={6} sm={12} className="p-2">
                     <img className="courseImg" src={MyList.small_img} />
                   </Col>

                   {/* Course Title and Description */}
                   <Col lg={6} md={6} sm={12}>
                     <h5 className="text-justify serviceName">{MyList.short_title}</h5>
                     <p className="text-justify serviceDescription">{MyList.short_description}</p>
                     {/* Link to course details page */}
                     <Link className="courseViewMore float-left" to="/coursedetails">View Details</Link>
                   </Col> 
                 </Row> 
               </Col> 
             );
          });

          return (
               <Fragment>
                    <Container className="text-center">
                         {/* Section Title */}
                         <h1 className="serviceMainTitle">MY COURSES</h1>
                         <div className="bottom"></div>

                         {/* Display course list */}
                         <Row>
                              {MyView}
                         </Row>
                    </Container>
               </Fragment>
          )
     }
}

export default AllCourses;
