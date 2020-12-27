import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions';
import Book from '../components/book';

const mapStateToProps = state => {
  const bookObj = state.booksReducer;

  return {
    bookObj,
  };
};

const mapDispatchToProps = dispatch => ({
  remove: obj => dispatch(removeBook(obj)),
});

const BookList = props => {
  const { bookObj } = props;

  const handleRemove = obj => {
    props.remove(obj);
  };
  return (
    <Book bookObj={bookObj} handleRemove={handleRemove} />
  );
};
BookList.propTypes = {
  bookObj: PropTypes.instanceOf(Object),
};

BookList.propTypes = {
  remove: PropTypes.instanceOf(Object),
};

BookList.defaultProps = {
  bookObj: {},
};

BookList.defaultProps = {
  remove: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
