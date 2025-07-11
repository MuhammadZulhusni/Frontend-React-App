import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import designIcon from '../../asset/image/design.png';
import ecommerceIcon from '../../asset/image/ecommerce.png';
import webIcon from '../../asset/image/web.png';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';
import { Fade } from 'react-awesome-reveal'; 

class Services extends Component {

     constructor(){
          super();
          this.state={
               myData:[],
               loading:true 
          }
     }

     componentDidMount(){
          RestClient.GetRequest(AppUrl.Services).then(result=>{
               this.setState({myData:result, loading:false});
          }) 
     }

     render() {
          if (this.state.loading === true) {
               return <Loading />
          } else { 
               const MyList = this.state.myData;

               const MyView = MyList.map((MyList, index) => {
                    return (
                         <Col lg={4} md={6} sm={12} key={index}>
                              <Fade direction="up" triggerOnce>
                                   <div className="serviceCard text-center">
                                        <img className="ecommerceIcon" src={MyList.service_logo} alt="Service Logo" />
                                        <h2 className="serviceName">{MyList.service_name}</h2>
                                        <p className="serviceDescription">{MyList.service_description}</p>
                                   </div>
                              </Fade>
                         </Col>  
                    )
               });

               return (
                    <Fragment>
                         <Container className="text-center">
                              <Fade triggerOnce>
                                   <h1 className="serviceMainTitle">MY SERVICES</h1>
                                   <div className="bottom"></div>
                              </Fade>
                              <Row>
                                   {MyView}
                              </Row>
                         </Container>
                    </Fragment>
               )
          }
     }
}

export default Services;
