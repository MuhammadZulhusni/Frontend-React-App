import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import parse from 'html-react-parser';
import Loading from '../Loading/Loading';
import WentWrong from '../WentWrong/WentWrong';
import { Fade } from 'react-awesome-reveal'; 

class AboutDescription extends Component {
    constructor() {
        super();
        this.state = {
            aboutdesc: "...",
            loading: true,
            error: false
        };
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.Information)
            .then(result => {
                if (result && result[0] && result[0]['about']) {
                    this.setState({
                        aboutdesc: result[0]['about'],
                        loading: false,
                        error: false
                    });
                } else {
                    console.error("API returned null or missing 'about' data.");
                    this.setState({ error: true, loading: false });
                }
            })
            .catch(error => {
                console.error("Error fetching about description:", error);
                this.setState({ error: true, loading: false });
            });
    }

    render() {
        if (this.state.loading === true) {
            return <Loading />;
        } else if (this.state.error === true) {
            return <WentWrong />;
        } else {
            return (
                <Fragment>
                    <Container className="mt-5">
                        <Row>
                            <Col sm={12} lg={12} md={12}>
                                {/* ✅ Animated appearance */}
                                <Fade triggerOnce direction="up" cascade>
                                    {parse(this.state.aboutdesc)}
                                </Fade>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}

export default AboutDescription;
