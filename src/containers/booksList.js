import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook, filterBooks } from '../actions';
import Book from '../components/book';
import CategoryFilter from '../components/categoryFilter';

const mapStateToProps = state => {
  const bookObj = state.booksReducer;
  const selectedFilter = state.filterReducer.selectedCategory;

  return {
    bookObj,
    selectedFilter,
  };
};

const setFilter = (obj = 'All', e) => {
  let obj2 = obj;
  obj2 = e.target.value;
  return obj2;
};

const mapDispatchToProps = dispatch => ({
  remove: obj => dispatch(removeBook(obj)),
  filter: selectedFilter => dispatch(filterBooks(selectedFilter)),
});

const BookList = props => {
  const { bookObj, selectedFilter } = props;

  const handleRemove = obj => {
    props.remove(obj);
  };

  const handleFilter = e => {
    const { filter } = props;
    filter(setFilter(bookObj, e), bookObj);
  };

  return (
    <>
      <Book bookObj={bookObj} handleRemove={handleRemove} selectedFilter={selectedFilter} />
      <CategoryFilter handleFilter={handleFilter} />
    </>

  );
};
BookList.propTypes = {
  bookObj: PropTypes.instanceOf(Object),
  selectedFilter: PropTypes.string,
  remove: PropTypes.instanceOf(Object),
  filter: PropTypes.func,
};

BookList.defaultProps = {
  bookObj: {},
  selectedFilter: undefined,
  remove: {},
  filter: 'All',
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
