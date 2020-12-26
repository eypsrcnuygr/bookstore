import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/book';

const mapStateToProps = state => {
  const bookObj = state.booksReducer;
  console.log(bookObj);
  return {
    bookObj,
  };
};

const BookList = bookObj => (
  <Book bookObj={bookObj} />
);

export default connect(mapStateToProps, null)(BookList);
