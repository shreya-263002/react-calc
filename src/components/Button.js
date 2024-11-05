
import React from 'react'; 
import './Button.css';
 const Button = ({ className, value, onClick }) => { return ( 
 <button style={{ fontWeight: 'bold', fontSize: '32px' }} className={`button ${className}`} onClick={() => onClick(value)}> {value}
  </button>
 ); 
};
 export default Button;