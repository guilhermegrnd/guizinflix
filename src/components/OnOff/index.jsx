import React from 'react';
import './index.css';

const Switch = ({ isOn, handleToggle, onColor, label }) => {
  return (
    <div className="on-off-div">
      <h3>{label}</h3>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && onColor }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </div>
  );
};

export default Switch;