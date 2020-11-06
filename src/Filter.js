import React from 'react';

const Filter= ({searchQuery, setSearchQuery}) => (
  <div>
    <input className="filterBar"
      id='productName' 
      type="text" 
      placeholder="Search by product name"
      value = {searchQuery}
      onChange = {(e) => setSearchQuery(e.target.value)}
      />
  </div>
); 

export default Filter;