import React, { Component, Fragment, memo } from 'react';
import { Globe, Laptop, Star, CheckSquare } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import '../../asset/css/summary.css'; 

// Simplified CountUp with reduced complexity
const OptimizedCountUp = memo(({ end, duration = 2000 }) => {
  const [count, setCount] = React.useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  React.useEffect(() => {
    if (inView) {
      // Use simpler linear animation instead of easing
      const increment = end / (duration / 50); // Update every 50ms
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 50);

      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
});

// Single intersection observer for the entire section
const useScrollAnimation = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return { ref, isVisible: inView };
};

class Summary extends Component {
  render() {
    return (
      <Fragment>
        <div className="summary-banner-optimized">
          <div className="summary-banner-overlay-optimized">
            <div className="inner-container">
              <SummaryContent />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

// Separate content component for better performance
const SummaryContent = memo(() => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className={`summary-row ${isVisible ? 'animate-in' : ''}`}>
      {/* Stats Section */}
      <div className="stats-section">
        <div className="count-section">
          <div className="count-col">
            <div className="icon-project-simple">
              <Globe size={40} />
            </div>
            <h1 className="count-number">
              <OptimizedCountUp end={3000} duration={2000} />
            </h1>
            <h4 className="count-title">Students Worldwide</h4>
            <div className="hr-style-simple" />
          </div>

          <div className="count-col">
            <div className="icon-project-simple">
              <Laptop size={40} />
            </div>
            <h1 className="count-number">
              <OptimizedCountUp end={200} duration={1500} />
            </h1>
            <h4 className="count-title">Courses Published</h4>
            <div className="hr-style-simple" />
          </div>

          <div className="count-col">
            <div className="icon-project-simple">
              <Star size={40} />
            </div>
            <h1 className="count-number">
              <OptimizedCountUp end={2000} duration={1800} />
            </h1>
            <h4 className="count-title">Student Reviews</h4>
            <div className="hr-style-simple" />
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="achievements-section">
        <div className="work-card-simple">
          <h3 className="card-title-simple">What I Have Achieved</h3>
          <div className="achievements-list">
            <p className="card-subtitle-simple">
              <CheckSquare size={18} className="icon-bullet" />
              Requirement Gathering
            </p>
            <p className="card-subtitle-simple">
              <CheckSquare size={18} className="icon-bullet" />
              System Analysis
            </p>
            <p className="card-subtitle-simple">
              <CheckSquare size={18} className="icon-bullet" />
              Coding & Testing
            </p>
            <p className="card-subtitle-simple">
              <CheckSquare size={18} className="icon-bullet" />
              Implementation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Summary;