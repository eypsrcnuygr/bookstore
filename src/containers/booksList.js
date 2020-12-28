import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions';
import Book from '../components/book';

const mapStateToProps = state => {
  const bookObj = state.booksReducer;
  const selectedFilter = state.filterReducer.selectedCategory;

  return {
    bookObj,
    selectedFilter,
  };
};

const mapDispatchToProps = dispatch => ({
  remove: obj => dispatch(removeBook(obj)),
});

const BookList = props => {
  const { bookObj, selectedFilter } = props;

  const handleRemove = obj => {
    props.remove(obj);
  };

  return (
    <Book bookObj={bookObj} handleRemove={handleRemove} selectedFilter={selectedFilter} />
  );
};
BookList.propTypes = {
  bookObj: PropTypes.instanceOf(Object),
  selectedFilter: PropTypes.string,
  remove: PropTypes.instanceOf(Object),
};

BookList.defaultProps = {
  bookObj: {},
  selectedFilter: undefined,
  remove: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
