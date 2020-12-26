import React from 'react';
import { connect } from 'react-redux';
import { removeBook } from '../actions';
import '../App.css';

const mapDispatchToProps = dispatch => ({
  remove: obj => dispatch(removeBook(obj)),
});

const book = props => {
  const bookObjForBook = props.bookObj.bookObj.bookObj;
  console.log(bookObjForBook);
  let i = 0;
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Title</th>
            <th>Author</th>
            <th>Page</th>
            <th>Date Published</th>
            <th>Read</th>
            <th>Book ID</th>
          </tr>
        </thead>
        <tbody>
          {bookObjForBook.map(book => (
            <tr key={book.BookID}>
              {Object.values(book).map(value => {
                i += 1;
                if (value === true) {
                  return <td key={i}>Yes</td>;
                } if (value === false) {
                  return <td key={i}>No</td>;
                }
                return <td key={i}>{value}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default connect(null, mapDispatchToProps)(book);
