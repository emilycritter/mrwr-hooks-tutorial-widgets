import React, { useState } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            className="input"
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
