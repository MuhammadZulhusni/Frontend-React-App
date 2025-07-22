import React, { useState, useEffect, useMemo, useCallback, lazy, Suspense } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import '../../asset/css/aboutdesc.css'; 

// Lazy load heavy components
const Fade = lazy(() => import('react-awesome-reveal').then(module => ({ default: module.Fade })));
const Loading = lazy(() => import('../Loading/Loading'));
const WentWrong = lazy(() => import('../WentWrong/WentWrong'));

// Simple fallback components for suspense
const SimpleFallback = () => <div className="simple-loading">Loading...</div>;

// Memoized content renderer to avoid re-parsing HTML
const ContentRenderer = React.memo(({ htmlContent }) => {
  // Use dangerouslySetInnerHTML for better performance than html-react-parser
  return (
    <div 
      className="content-area"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
});

// Memoized decoration elements (static content)
const DecorationElements = React.memo(() => (
  <div className="decoration-elements">
    <div className="deco-line line-1"></div>
    <div className="deco-line line-2"></div>
    <div className="deco-dot dot-1"></div>
    <div className="deco-dot dot-2"></div>
  </div>
));

// Main component
const AboutDescription = () => {
  const [state, setState] = useState({
    aboutdesc: "",
    loading: true,
    error: false
  });

  // Fetch data with proper cleanup
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const result = await RestClient.GetRequest(AppUrl.Information, {
          signal: controller.signal
        });

        if (!isMounted) return;

        if (result?.[0]?.about) {
          setState({
            aboutdesc: result[0].about,
            loading: false,
            error: false
          });
        } else {
          console.error("API returned null or missing 'about' data.");
          setState(prev => ({ ...prev, error: true, loading: false }));
        }
      } catch (error) {
        if (!isMounted || error.name === 'AbortError') return;
        
        console.error("Error fetching about description:", error);
        setState(prev => ({ ...prev, error: true, loading: false }));
      }
    };

    fetchData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  // Memoized render functions
  const renderLoading = useCallback(() => (
    <section className="about-desc-section loading-state">
      <Container>
        <Suspense fallback={<SimpleFallback />}>
          <Loading />
        </Suspense>
      </Container>
    </section>
  ), []);

  const renderError = useCallback(() => (
    <section className="about-desc-section error-state">
      <Container>
        <Suspense fallback={<SimpleFallback />}>
          <WentWrong />
        </Suspense>
      </Container>
    </section>
  ), []);

  // Memoized main content
  const mainContent = useMemo(() => {
    if (!state.aboutdesc) return null;

    return (
      <section className="about-desc-section">
        <Container className="about-desc-container">
          <Row className="justify-content-center">
            <Col lg={10} md={11} sm={12}>
              <div className="about-description-wrapper">
                <ContentRenderer htmlContent={state.aboutdesc} />
                <DecorationElements />
              </div>
            </Col>
          </Row>
        </Container>
        
        <div className="section-divider">
          <div className="divider-line"></div>
          <div className="divider-dot"></div>
        </div>
      </section>
    );
  }, [state.aboutdesc]);

  // Enhanced content with animation (only load when needed)
  const enhancedContent = useMemo(() => {
    if (!mainContent) return null;

    return (
      <Suspense fallback={mainContent}>
        <Fade triggerOnce direction="up" delay={100}>
          {mainContent}
        </Fade>
      </Suspense>
    );
  }, [mainContent]);

  if (state.loading) return renderLoading();
  if (state.error) return renderError();
  
  // Use enhanced content with animation, fallback to basic content
  return enhancedContent || mainContent;
};

export default AboutDescription;