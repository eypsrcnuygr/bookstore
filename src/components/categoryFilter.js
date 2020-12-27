/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
import React from 'react';

const CategoryFilter = props => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  let i = 0;

  return (
    <>
      <div><h1>Select a Filter</h1></div>
      <select type="checkbox" onClick={e => props.handleFilter(e)}>
        {categories.map(category => {
          i += 1;
          return (
            <option key={i} value={category}>{category}</option>
          );
        })}
      </select>
    </>
  );
};

export default CategoryFilter;
