import React from 'react';
import { connect } from 'react-redux';
import Book from './book';
// import store from '../store/store';

const mapStateToProps = state => {
  const {
    category, title, author, page, datePublished, read, BookID,
  } = state.booksReducer.bookObj;
  return {
    category, title, author, page, datePublished, read, BookID,
  };
};

const BookList = bookObj => (
  <Book bookObj={bookObj} />
);

export default connect(mapStateToProps, null)(BookList);
