import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = props => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  let i = 0;

  return (
    <>
      <div><h2>Select a Filter</h2></div>
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

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func,
};

CategoryFilter.defaultProps = {
  handleFilter: 'All',
};

export default CategoryFilter;
