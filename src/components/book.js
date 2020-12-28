import React from 'react';
import '../App.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const book = props => {
  const bookObjForBook = props.bookObj.bookObj;
  let i = 0;

  return (
    <div className="book-container-container">
      <h2 id="book-list-heading">The book List</h2>

      {bookObjForBook.filter(element => (!props.selectedFilter || props.selectedFilter === 'All' ? element : element.category === props.selectedFilter)).map(book => {
        i += 1;
        return (
          <div key={i}>
            <div className="flex book-container">
              <div>
                <div id="book-category">{book.category}</div>
                <div id="book-title">{book.title}</div>
                <div className="blue">{book.author}</div>
                <div id="button-holder">
                  <button className="blue no-border" type="button">Comment</button>
                  <button onClick={() => props.handleRemove(book)} className="blue no-border" type="button">Remove</button>
                  <button className="blue no-border" type="button">Edit</button>
                </div>
              </div>
              <div className="Oval-2">
                <CircularProgressbar value={book.read} className="circular" />
              </div>
              <div>
                {`${book.read} %`}
                <div>
                  Completed
                </div>
              </div>
              <div className="chapter">
                <h4>Current Chapter</h4>
                <p>Chapter XXX</p>
                <button type="button" className="update-button">UPDATE PROGRESS</button>
              </div>
            </div>
          </div>

        );
      })}

    </div>
  );
};
export default book;
