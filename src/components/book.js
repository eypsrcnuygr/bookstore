import React from 'react';
import '../App.css';

const book = props => {
  const bookObjForBook = props.bookObj.bookObj;
  let i = 0;

  return (
    <>
      <h2 id="book-list-heading">The book List</h2>

      {bookObjForBook.filter(element => (!props.selectedFilter || props.selectedFilter === 'All' ? element : element.category === props.selectedFilter)).map(book => {
        i += 1;
        return (
          <div key={i} className="flex">
            <div>
              <div>{book.category}</div>
              <div>{book.title}</div>
              <div>{book.author}</div>
              <div>
                <button type="button">Comment</button>
                <button onClick={() => props.handleRemove(book)} type="button">Remove</button>
                <button type="button">Edit</button>
              </div>
            </div>
            <div>
              Placeholder for status bar
            </div>
            <div>
              {book.read}
              <div>
                Completed
              </div>
            </div>
            <div>
              <h4>Current Chapter</h4>
              <p>Chapter XXX</p>
              <button type="button">UPDATE PROGRESS</button>
            </div>
          </div>
        );
      })}

    </>
  );
};
export default book;
