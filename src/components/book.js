/* eslint-disable no-unused-vars */
import React from 'react';

const book = props => {
  const {
    BookID, title, category, author, page, datePublished, read,
  } = props.bookObj;
  const bookArr = [];
  let i = 0;
  let b = 0;
  let c = 14;
  while (i < BookID.length) {
    bookArr.push(BookID[i]);
    bookArr.push(title[i]);
    bookArr.push(category[i]);
    bookArr.push(author[i]);
    bookArr.push(page[i]);
    bookArr.push(datePublished[i]);
    if (read[i]) {
      bookArr.push('Yes');
    } else {
      bookArr.push('No');
    }
    i += 1;
  }
  const newArr1 = bookArr.slice(0, 7);
  const newArr2 = bookArr.slice(7, 14);
  const newVariable = [];
  while (c < bookArr.length) {
    newVariable.push(bookArr.slice(c, c + 7));
    c += 7;
  }
  return (
    <table>
      <thead>
        <tr>
          <td>BookID</td>
          <td>Title</td>
          <td>Category</td>
          <td>Author</td>
          <td>Page</td>
          <td>Date Published</td>
          <td>Read</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          {newArr1.map(element => {
            b += 1;
            return (
              <td key={b}>{element}</td>
            );
          })}
        </tr>
        <tr>
          {newArr2.map(element => {
            b += 1;
            return (
              <td key={b}>{element}</td>
            );
          })}
        </tr>
        {newVariable.length !== 0 ? newVariable.map(element => (
          <tr key={b}>
            {element.map(realElement => {
              b += 1;
              return (
                <td key={b}>{realElement}</td>
              );
            })}
          </tr>
        )) : null}
      </tbody>
    </table>
  );
};

export default book;
