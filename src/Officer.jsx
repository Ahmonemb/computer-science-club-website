import React from "react";
import { useState, useEffect, useRef } from "react";
import './Officer.css';

function Officer() {
  return (
   <>
      <h1>Current Officers</h1>

      <div className="officer-container">
        <img src="path/to/john-image" alt="John Gutierrez" className="officer-image" />
        <div className="officer-text">
          <h2>President: John Gutierrez</h2>
          <p>Description about John Gutierrez</p>
        </div>
      </div>

      <div className="officer-container">
        <img src="path/to/ahmon-image" alt="Ahmon" className="officer-image" />
        <div className="officer-text">
          <h3>Co-President: Ahmon</h3>
          <p>Description about Ahmon</p>
        </div>
      </div>

      <div className="officer-container">
        <img src="path/to/edgar-image" alt="Edgar" className="officer-image" />
        <div className="officer-text">
          <h3>ICC Representative: Edgar</h3>
          <p>Description about Edgar</p>
        </div>
      </div>

      <div className="officer-container">
        <img src="path/to/logan-image" alt="Logan" className="officer-image" />
        <div className="officer-text">
          <h3>Treasurer: Logan</h3>
          <p>Description about Logan</p>
        </div>
      </div>
      </>
  );
}

export default Officer;
