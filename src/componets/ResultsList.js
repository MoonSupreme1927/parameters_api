import React from 'react';

const ResultList = ({ results }) => {
  return (
    <div className="result-list">
      {results.length === 0 ? (
        <p>No results found</p>
      ) : (
        results.map((result, index) => (
          <div key={index} className="result-item">
            <p>{result}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ResultList;
