import React from 'react';

const book = props => {
  const {
    BookID, title, category, author, page, datePublished, read,
  } = props.bookObj;
  let i = 0;
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Book ID</th>
            {BookID.map(element => {
              i += 1;
              return (
                <td key={i}>{element}</td>
              );
            })}
          </tr>
          <tr>
            <th>Title</th>
            {title.map(element => {
              i += 1;
              return (
                <td key={i}>{element}</td>
              );
            })}
          </tr>
          <tr>
            <th>Category</th>
            {category.map(element => {
              i += 1;
              return (
                <td key={i}>{element}</td>
              );
            })}
          </tr>
          <tr>
            <th>Author</th>
            {author.map(element => {
              i += 1;
              return (
                <td key={i}>{element}</td>
              );
            })}
          </tr>
          <tr>
            <th>Page</th>
            {page.map(element => {
              i += 1;
              return (
                <td key={i}>{element}</td>
              );
            })}
          </tr>
          <tr>
            <th>Date Published</th>
            {datePublished.map(element => {
              i += 1;
              return (
                <td key={i}>{element}</td>
              );
            })}
          </tr>
          <tr>
            <th>Read</th>
            {read.map(element => {
              i += 1;
              return (
                <td key={i}>{element ? 'Yes' : 'No' }</td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default book;