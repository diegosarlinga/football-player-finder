import React from 'react';
import './Loading-indicator.scss';

const LoadingIndicator: React.FC = () => {
  return (
    <div className="Loading-indicator-overlay d-flex justify-content-center align-items-center">
      <div className="Loading-indicator spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default LoadingIndicator;
