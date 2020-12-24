export const createBook = bookObj => ({
  type: 'CREATE_BOOK',
  payload: {
    id: bookObj.BookID[-1],
    bookObj,
  },
});

export const removeBook = (bookObj, selectedId) => ({
  type: 'REMOVE_BOOK',
  payload: {
    id: selectedId,
    bookObj,
  },
});
