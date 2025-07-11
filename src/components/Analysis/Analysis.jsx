import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
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

     render() {
          if (this.state.loading === true) {
               return <Loading />;
          } else {
               const blue = "#051b35";

               return (
                    <Fragment>
                         <Container className="text-center">
                              <Fade triggerOnce direction="up">
                                   <h1 className="serviceMainTitle">TECHNOLOGY USED</h1>
                                   <div className="bottom"></div>
                              </Fade>

                              <Row>
                                   {/* Graph (no animation) */}
                                   <Col lg={6} md={12} sm={12} style={{ height: '300px' }}>
                                        <ResponsiveContainer width="100%" height="100%">
                                             <BarChart data={this.state.data}>
                                                  <XAxis dataKey="x_data" />
                                                  <Tooltip />
                                                  <Bar dataKey="y_data" fill={blue} />
                                             </BarChart>
                                        </ResponsiveContainer>
                                   </Col>

                                   {/* Description with reveal */}
                                   <Col lg={6} md={12} sm={12}>
                                        <Fade triggerOnce direction="right">
                                             <p className="text-justify serviceDescription">
                                                  {parse(this.state.techdesc)}
                                             </p>
                                        </Fade>
                                   </Col>
                              </Row>
                         </Container>
                    </Fragment>
               );
          }
     }
}

export default Analysis;
