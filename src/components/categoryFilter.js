import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = props => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  let i = 0;

  return (
    <>
      <div className="filter">
        <div className="inner-filter">
          <div id="selec-filter-heading"><h2>Select a Filter</h2></div>
          <select type="checkbox" onClick={e => props.handleFilter(e)} className="select-filter">
            {categories.map(category => {
              i += 1;
              return (
                <option key={i} value={category}>{category}</option>
              );
            })}
          </select>
        </div>

      </div>

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
