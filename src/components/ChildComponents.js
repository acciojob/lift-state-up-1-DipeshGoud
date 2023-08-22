import React from 'react';

const ChildComponent = ({ showModal, onButtonClick }) => {
  return (
    <div className="child">
      <h2>Child Component</h2>
      <button onClick={onButtonClick}>Show Modal</button>
      {showModal && <div className="modal">Modal Content</div>}
    </div>
  );
};

export default ChildComponent;
