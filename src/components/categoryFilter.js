/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { filterBooks } from '../actions/index';

const mapStateToProps = state => {
  const bookObj = state.booksReducer;

  return {
    bookObj,
  };
};

const mapDispatchToProps = dispatch => ({
  filterBooks: (obj, selectedCategory) => dispatch(filterBooks(obj, selectedCategory)),
});

const CategoryFilter = props => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const [selectedCategoryState, setSelectedCategoryState] = useState('All');
  let i = 0;

  const onClickToCheckbox = e => {
    setSelectedCategoryState(e.target.value);
  };

  const filterOne = selectedCategory => {
    props.filterBooks(selectedCategory);
  };

  return (
    <>
      <div><h1>Select a Filter</h1></div>
      <select type="checkbox" onChange={onClickToCheckbox} onClick={() => filterOne(selectedCategoryState)}>
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);
