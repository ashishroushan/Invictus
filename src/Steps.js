import React, { useEffect, useState } from 'react';
import './Steps.css';

function Steps({ table, wordCount }) {

  return (

        <div className="description1 center1 active1">
          <div className="title1">Steps</div>
          <div className="description">
              <ul>
                  <li className="list">This website displays the top N words and their frequency of occurrence</li>
                  <li className="list">To check the list just type the number in above input field</li>
                  <li className="list">Type a number between 0 to 144</li>
                  <li className="list">Submit button will appear When you give input</li>
                  <li className="list">Well enough talk! Happy Searching...</li>
              </ul>
          </div>
        </div>
  );
}

export default Steps;
