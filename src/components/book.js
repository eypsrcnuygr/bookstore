import React from 'react';

const book = bookObj => {
  const {
    BookID, title, category, author, page, datePublished, read,
  } = bookObj.bookObj;

  console.log(bookObj);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Author</th>
            <th>Page</th>
            <th>Date Published</th>
            <th>Read</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{BookID}</td>
            <td>{title}</td>
            <td>{category}</td>
            <td>{author}</td>
            <td>{page}</td>
            <td>{datePublished}</td>
            <td>{read}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default book;
