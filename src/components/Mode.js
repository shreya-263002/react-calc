

import React, { useState } from 'react';
import './Mode.css';

const Mode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <div className="mode">
        <h4 style={{ fontWeight: 'bold', fontSize: '20px' }} >Set Mode</h4>
      <label className="switch">
        <input type="checkbox" onChange={toggleMode} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Mode;

