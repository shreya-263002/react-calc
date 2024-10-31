import React from 'react';
import Mode from './Mode';
import './Wrapper.css';

const Wrapper = ({ children }) => {
  return (
    <div className="wrapper">
      <Mode />
      {children}
    </div>
  );
};

export default Wrapper;
