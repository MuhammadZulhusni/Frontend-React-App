import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import parse from 'html-react-parser';
import Loading from '../Loading/Loading';
import { Fade } from 'react-awesome-reveal';

class Analysis extends Component {
     constructor() {
          super();
          this.state = {
               data: [],
               techdesc: "...",
               loading: true
          };
     }

     componentDidMount() {
          RestClient.GetRequest(AppUrl.ChartData).then(result => {
               this.setState({ data: result, loading: false });
          });

          RestClient.GetRequest(AppUrl.HomeTechDesc).then(result => {
               this.setState({ techdesc: result[0]['tech_description'] });
          });
     }

     // Custom tooltip component
     CustomTooltip = ({ active, payload, label }) => {
          if (active && payload && payload.length) {
               return (
                    <div style={{
                         backgroundColor: 'rgba(255, 255, 255, 0.95)',
                         border: 'none',
                         borderRadius: '12px',
                         padding: '12px 16px',
                         boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                         backdropFilter: 'blur(10px)',
                         fontSize: '14px',
                         fontWeight: '500'
                    }}>
                         <p style={{ margin: '0 0 4px 0', color: '#374151', fontWeight: '600' }}>
                              {`${label}`}
                         </p>
                         <p style={{ margin: 0, color: '#059669' }}>
                              {`Value: ${payload[0].value}`}
                         </p>
                    </div>
               );
          }
          return null;
     };

     render() {
          if (this.state.loading === true) {
               return <Loading />;
          } else {
               const gradientId = "colorGradient";

               return (
                    <Fragment>
                         <div style={{
                              background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                              padding: '80px 0',
                              marginTop: '60px'
                         }}>
                              <Container>
                                   {/* Modern Header */}
                                   <div className="text-center mb-5">
                                        <Fade triggerOnce direction="up">
                                             <div style={{ marginBottom: '20px' }}>
                                                  <span style={{
                                                       display: 'inline-block',
                                                       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                                       WebkitBackgroundClip: 'text',
                                                       WebkitTextFillColor: 'transparent',
                                                       fontSize: '14px',
                                                       fontWeight: '600',
                                                       letterSpacing: '2px',
                                                       textTransform: 'uppercase',
                                                       marginBottom: '16px'
                                                  }}>
                                                       Technology Stack
                                                  </span>
                                             </div>
                                             <h1 style={{
                                                  fontSize: '3.5rem',
                                                  fontWeight: '700',
                                                  background: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                                                  WebkitBackgroundClip: 'text',
                                                  WebkitTextFillColor: 'transparent',
                                                  marginBottom: '24px',
                                                  lineHeight: '1.2'
                                             }}>
                                                  TECHNOLOGY USED
                                             </h1>
                                             <div style={{
                                                  width: '80px',
                                                  height: '4px',
                                                  background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                                                  margin: '0 auto',
                                                  borderRadius: '2px'
                                             }}></div>
                                        </Fade>
                                   </div>

                                   <Row className="align-items-center">
                                        {/* Modern Chart Container */}
                                        <Col lg={6} md={12} sm={12} className="mb-4">
                                             <Fade triggerOnce direction="left">
                                                  <div style={{
                                                       background: 'rgba(255, 255, 255, 0.9)',
                                                       borderRadius: '24px',
                                                       padding: '40px 30px',
                                                       boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                                                       backdropFilter: 'blur(10px)',
                                                       border: '1px solid rgba(255, 255, 255, 0.3)',
                                                       height: '400px'
                                                  }}>
                                                       <ResponsiveContainer width="100%" height="100%">
                                                            <BarChart 
                                                                 data={this.state.data}
                                                                 margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                                                            >
                                                                 <defs>
                                                                      <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                                                                           <stop offset="0%" stopColor="#667eea" stopOpacity={1} />
                                                                           <stop offset="100%" stopColor="#764ba2" stopOpacity={0.8} />
                                                                      </linearGradient>
                                                                 </defs>
                                                                 <XAxis 
                                                                      dataKey="x_data" 
                                                                      axisLine={false}
                                                                      tickLine={false}
                                                                      tick={{ fontSize: 12, fill: '#64748b', fontWeight: '500' }}
                                                                 />
                                                                 <YAxis
                                                                      axisLine={false}
                                                                      tickLine={false}
                                                                      tick={{ fontSize: 12, fill: '#64748b', fontWeight: '500' }}
                                                                 />
                                                                 <Tooltip content={<this.CustomTooltip />} />
                                                                 <Bar 
                                                                      dataKey="y_data" 
                                                                      fill={`url(#${gradientId})`}
                                                                      radius={[8, 8, 0, 0]}
                                                                      maxBarSize={60}
                                                                 />
                                                            </BarChart>
                                                       </ResponsiveContainer>
                                                  </div>
                                             </Fade>
                                        </Col>

                                        {/* Modern Description */}
                                        <Col lg={6} md={12} sm={12}>
                                             <Fade triggerOnce direction="right" delay={200}>
                                                  <div style={{
                                                       padding: '40px',
                                                       background: 'rgba(255, 255, 255, 0.8)',
                                                       borderRadius: '24px',
                                                       boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                                                       backdropFilter: 'blur(10px)',
                                                       border: '1px solid rgba(255, 255, 255, 0.3)',
                                                       position: 'relative',
                                                       overflow: 'hidden'
                                                  }}>
                                                       {/* Decorative gradient overlay */}
                                                       <div style={{
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                            right: 0,
                                                            height: '4px',
                                                            background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)'
                                                       }}></div>
                                                       
                                                       <div style={{
                                                            fontSize: '16px',
                                                            lineHeight: '1.8',
                                                            color: '#374151',
                                                            fontWeight: '400'
                                                       }}>
                                                            {parse(this.state.techdesc)}
                                                       </div>
                                                       
                                                       {/* Decorative elements */}
                                                       <div style={{
                                                            position: 'absolute',
                                                            bottom: '-50px',
                                                            right: '-50px',
                                                            width: '100px',
                                                            height: '100px',
                                                            background: 'linear-gradient(135deg, #667eea20, #764ba220)',
                                                            borderRadius: '50%',
                                                            zIndex: 0
                                                       }}></div>
                                                  </div>
                                             </Fade>
                                        </Col>
                                   </Row>
                              </Container>
                         </div>
                    </Fragment>
               );
          }
     }
}

export default Analysis;