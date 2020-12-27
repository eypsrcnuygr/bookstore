import React from 'react';
import '../App.css';

const book = props => {
  const bookObjForBook = props.bookObj.bookObj;
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
              <td><button onClick={() => props.handleRemove(book)} type="button">Remove</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default book;
