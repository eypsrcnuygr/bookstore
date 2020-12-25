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

export const removeBook = (bookObj, selectedId) => ({
  type: 'REMOVE_BOOK',
  payload: {
    id: selectedId,
    bookObj,
  },
});
