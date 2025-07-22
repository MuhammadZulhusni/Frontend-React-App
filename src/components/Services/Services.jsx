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

     // Define gradient colors once to avoid recalculation
     getCardColor = (index) => {
          const colors = [
               { gradient: '#667eea', background: '#667eea' },
               { gradient: '#f093fb', background: '#f093fb' },
               { gradient: '#4facfe', background: '#4facfe' }
          ];
          return colors[index % 3];
     }

     render() {
          if (this.state.loading === true) {
               return <Loading />
          } else { 
               const MyList = this.state.myData;

               const MyView = MyList.map((item, index) => {
                    const cardColor = this.getCardColor(index);
                    
                    return (
                         <Col lg={4} md={6} sm={12} key={index} className="mb-4">
                              <Fade direction="up" triggerOnce delay={index * 50}>
                                   <div 
                                        className="serviceCard text-center modern-service-card"
                                        style={{
                                             background: '#ffffff',
                                             borderRadius: '16px',
                                             padding: '40px 24px',
                                             boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                                             border: '1px solid #e2e8f0',
                                             position: 'relative',
                                             transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                             cursor: 'pointer',
                                             height: '100%',
                                             display: 'flex',
                                             flexDirection: 'column',
                                             justifyContent: 'center'
                                        }}
                                   >
                                        {/* Simple top accent */}
                                        <div style={{
                                             position: 'absolute',
                                             top: 0,
                                             left: 0,
                                             right: 0,
                                             height: '3px',
                                             backgroundColor: cardColor.gradient,
                                             borderRadius: '16px 16px 0 0'
                                        }}></div>

                                        {/* Simplified icon container */}
                                        <div style={{
                                             width: '80px',
                                             height: '80px',
                                             margin: '0 auto 24px auto',
                                             borderRadius: '50%',
                                             backgroundColor: `${cardColor.background}15`,
                                             display: 'flex',
                                             alignItems: 'center',
                                             justifyContent: 'center'
                                        }}>
                                             <img 
                                                  className="ecommerceIcon" 
                                                  src={`https://rapi.get-virtual-admin.com/${item.service_logo}`} 
                                                  alt="Service Logo"
                                                  style={{
                                                       width: '40px',
                                                       height: '40px',
                                                       objectFit: 'contain'
                                                  }}
                                             />
                                        </div>

                                        {/* Service name */}
                                        <h2 
                                             className="serviceName"
                                             style={{
                                                  fontSize: '1.25rem',
                                                  fontWeight: '600',
                                                  color: '#1e293b',
                                                  marginBottom: '16px',
                                                  lineHeight: '1.4'
                                             }}
                                        >
                                             {item.service_name}
                                        </h2>

                                        {/* Service description */}
                                        <p 
                                             className="serviceDescription"
                                             style={{
                                                  fontSize: '14px',
                                                  lineHeight: '1.5',
                                                  color: '#64748b',
                                                  fontWeight: '400',
                                                  margin: 0
                                             }}
                                        >
                                             {item.service_description}
                                        </p>
                                   </div>
                              </Fade>
                         </Col>  
                    )
               });

               return (
                    <Fragment>
                         {/* Simplified CSS for hover effects */}
                         <style jsx>{`
                              .modern-service-card:hover {
                                   transform: translateY(-4px);
                                   box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
                              }
                         `}</style>

                         <div style={{
                              backgroundColor: '#f8fafc',
                              padding: '80px 0',
                              position: 'relative'
                         }}>
                              <Container className="text-center">
                                   {/* Simplified header */}
                                   <div className="mb-5" style={{ marginBottom: '60px' }}>
                                        <Fade triggerOnce direction="up">
                                             <div style={{ marginBottom: '16px' }}>
                                                  <span style={{
                                                       fontSize: '14px',
                                                       fontWeight: '600',
                                                       letterSpacing: '1px',
                                                       textTransform: 'uppercase',
                                                       color: '#667eea'
                                                  }}>
                                                       What We Offer
                                                  </span>
                                             </div>
                                             <h1 style={{
                                                  fontSize: '2.5rem',
                                                  fontWeight: '700',
                                                  color: '#1e293b',
                                                  marginBottom: '16px',
                                                  lineHeight: '1.2'
                                             }}>
                                                  MY SERVICES
                                             </h1>
                                             <div style={{
                                                  width: '60px',
                                                  height: '3px',
                                                  backgroundColor: '#667eea',
                                                  margin: '0 auto',
                                                  borderRadius: '2px'
                                             }}></div>
                                        </Fade>
                                   </div>

                                   <Row className="justify-content-center">
                                        {MyView}
                                   </Row>
                              </Container>
                         </div>
                    </Fragment>
               )
          }
     }
}

export default Services;