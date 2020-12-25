export const createBook = bookObj => {
  console.log(bookObj.title);

  return ({
    type: 'CREATE_BOOK',
    payload: {
      id: bookObj.BookID,
      title: bookObj.title,
      author: bookObj.author,
      page: bookObj.page,
      category: bookObj.category,
      datePublished: bookObj.datePublished,
      read: bookObj.read,
    },
  });
};

export const removeBook = (bookObj, selectedId) => ({
  type: 'REMOVE_BOOK',
  payload: {
    id: selectedId,
    bookObj,
  },
});
