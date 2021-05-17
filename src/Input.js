import React, { useEffect, useState } from 'react';
import Warning from './Warning'
import './Input.css';
import Steps from './Steps'

function Input({ frequencyArray, arrayLength }) {
  const [wordCount, setWordCount] = useState();
  const [table, setTable] = useState(false);
  const [renderButton, setRenderButton]=useState(false);
  const [renderSteps, setRenderSteps]=useState(true);
  const showTable = () => {
    setTable(true);
  };
  useEffect(() => {
    setTable(false);
   
  }, [wordCount]);
  useEffect(() => {
      if(wordCount===""){
        setRenderButton(false);
        setRenderSteps(true);
    }
   
  }, [wordCount]);
  return (
    <div className="wrapping-div">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="number"
          value={wordCount}
          onChange={(e) => {setWordCount(e.target.value);  setRenderButton(true); setRenderSteps(false);}}
          autoComplete="off"
          name="name"
          required
        />
        <label htmlFor="name" className="label-name">
          <span className="content-name content-style">Top Frequent words (Enter a number)</span>
        </label>
        {renderButton && <button
          className="button"
          onClick={showTable}
          disabled={wordCount === '' ? true : false}
        >
          Submit
        </button>}
      </form>
      {renderSteps && <Steps />}
      {table && wordCount > 144 && <Warning table={table} wordCount={wordCount} /> }
      {table && wordCount <= 0 && <Warning table={table} wordCount={wordCount} />}
      {table && wordCount <= arrayLength && wordCount >0 && (
        <>
          <div className="title">Top {wordCount} frequent words </div>
          <table className="content-table">
            <thead>
              <tr>
                <th>Word</th>
                <th>Frequency</th>
              </tr>
            </thead>
            <tbody>
              {frequencyArray.slice(0, wordCount).map((item) => (
                <tr>
                  <td>{item[0]}</td>
                  <td>{item[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default Input;
