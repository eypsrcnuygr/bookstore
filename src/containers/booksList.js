/* eslint-disable react/prop-types */
import React from 'react';
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
  const handleClick = obj => {
    props.remove(obj);
  };
  return (
    <Book bookObj={bookObj} handleClick={handleClick} />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
