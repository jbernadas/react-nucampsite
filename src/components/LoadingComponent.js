import React from "react";
import { FadeTransform } from 'react-animation-components';

export const Loading = () => {
  return (
    <FadeTransform in transformProps={{ exitTransform: 'scale(0.5) translateY(50%)' }}>
      <div className="col">
        <i className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary" />
        <p>Loading...</p>
      </div>
    </FadeTransform>
  );
};
