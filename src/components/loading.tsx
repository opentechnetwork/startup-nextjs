import React, { useEffect, useState } from "react";
import "../styles/loading.css"; // Use a dedicated CSS file for styling

const Loading: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // Notify parent to hide loader after 3 seconds
    }, 4000); // Reduced from 5000ms to 3000ms

    return () => clearTimeout(timer); // Cleanup timer
  }, [onFinish]);


  return (
    <div className="loading-overlay">
      <p className="loading-text blinking">Decrypting access...</p>
      <div className="loading-bar">
        <div className="progress"></div>
      </div>
    </div>
  );
};

export default Loading;
