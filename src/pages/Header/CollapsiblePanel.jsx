// CollapsiblePanel.js

import React, { useState } from 'react';
import './CollapsiblePanel.css'; // Import your CSS for styling

const CollapsiblePanel = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const togglePanel = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="collapsible-panel">
      <div className="panel-header" onClick={togglePanel}>
        <h3>{title}</h3>
        <span className={`icon ${isExpanded ? 'expanded' : 'collapsed'}`}>&#9660;</span>
      </div>
      {isExpanded && (
        <div className="panel-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default CollapsiblePanel;