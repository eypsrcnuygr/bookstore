export const createBook = bookObj => ({
  type: 'CREATE_BOOK',
  payload: {
    BookID: bookObj.BookID,
    title: bookObj.title,
    author: bookObj.author,
    page: bookObj.page,
    category: bookObj.category,
    datePublished: bookObj.datePublished,
    read: bookObj.read,
  },
});

export const removeBook = bookObj => {
  console.log(bookObj);
  return {
    type: 'REMOVE_BOOK',
    payload: {
      id: bookObj[0],
      title: bookObj[1],
      author: bookObj[3],
      page: bookObj[4],
      category: bookObj[2],
      datePublished: bookObj[5],
      read: bookObj[6],
    },
  };
};
