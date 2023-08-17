import React from 'react';
import { useNavigate } from 'react-router-dom';

//The NavigateButton lets us navigate to another screen in our app
const NavigateButton = ({ linkName, children, className }) => {
  // linkName is a destination name of the route
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(linkName); // Simply navigate to the new route name
  };
  return (
    <>
      <div style={{ marginBottom: 2 }}>
        <button onClick={clickHandler} className={className}>
          {children}
        </button>
      </div>
    </>
  );
};
export default NavigateButton;
