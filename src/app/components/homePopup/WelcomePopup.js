import React from 'react';
import './popupStyles.css'; // Make sure this path is correct

const WelcomePopup = ({ onClose }) => {
  return (
    <div className="popup-overlay show">
      <div className="popup-content">
        <h2 className="text-xl mb-4">Hello, Welcome!</h2>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Thanks
        </button>
      </div>
    </div>
  );
};

export default WelcomePopup;
