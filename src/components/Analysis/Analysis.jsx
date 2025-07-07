import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  CartesianGrid,
} from 'recharts';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

class Analysis extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.ChartData)
      .then((result) => {
        const formattedData = result.map((item) => ({
          Technology: item.x_data,
          Projects: parseInt(item.y_data),
        }));
        this.setState({ data: formattedData, loading: false });
      })
      .catch((error) => {
        console.error('Error fetching chart data:', error);
        this.setState({ loading: false });
      });
  }

  render() {
    const barColor = '#0d6efd'; // Bootstrap primary color

    return (
      <Fragment>
        <Container className="py-5 text-center">
          <h1 className="serviceMainTitle">TECHNOLOGY USED</h1>
          <div className="bottom"></div>

          <Row className="align-items-center">
            {/* Chart section */}
            <Col lg={6} md={12} className="mb-4">
              {this.state.loading ? (
                <p>Loading chart...</p>
              ) : (
                <div style={{ width: '100%', height: '300px' }}>
                  <ResponsiveContainer>
                    <BarChart
                      data={this.state.data}
                      margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="Technology" />
                      <Tooltip />
                      <Bar dataKey="Projects" fill={barColor} barSize={50} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}
            </Col>

            {/* Description section */}
            <Col lg={6} md={12}>
              <p className="text-start">
                Hi! I'm <strong>Kazi Ariyan</strong>, a web developer and founder of <strong>eLe Easy Learning</strong>.
                I've been working online for 7+ years, creating successful websites and sharing my knowledge through project-based courses.
              </p>
              <p className="text-start">
                My mission is to help you learn skills that matter. Whether you're starting from scratch or want to refresh your memory,
                you're in the right place!
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Analysis;
