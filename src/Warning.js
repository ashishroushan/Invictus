import React, { useEffect, useState } from 'react';
import './Warning.css';

function Warning({ table, wordCount }) {

  const [classChange, setClassChange] = useState(true);

  const dismissHandler = () => {
    setClassChange(false);
  };
  useEffect(() => {
    setClassChange(true);
  }, [wordCount]);

  return (
    <>
      {classChange && (
        <div className="popup center active">
          <div className="icon">
          <i className="fa fa-times"></i>
          </div>
          <div className="title">Error!!</div>
          <div className="description">
            Try a number between 0 and 144....(0,144]
          </div>
          <div className="dismiss-btn">
            <button id="dismiss-popup-btn" onClick={dismissHandler}>
              Dismiss
            </button>
          </div>
        </div>
      )}

      {classChange && (
        <div className="popup center">
          <div className="icon">
            <i className="fa fa-check"></i>
          </div>
          <div className="title">Error!!</div>
          <div className="description">
            Try a number between 0 and 144....(0,144]
          </div>
          <div className="dismiss-btn">
            <button id="dismiss-popup-btn" onClick={dismissHandler}>
              Dismiss
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Warning;
