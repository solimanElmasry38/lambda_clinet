import React from 'react';
import './Ratio.scss';
function Ratio({ children, ratio }) {
  const containerClassName = `aspect-ratio-container aspect-ratio-container--${ratio}`;

  return (
    <div>
      <div className={containerClassName}>
        <div className="aspect-ratio-container__inner">{children}</div>
      </div>
    </div>
  );
}

export default Ratio;
