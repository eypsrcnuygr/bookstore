export const createBook = bookObj => ({
  type: 'CREATE_BOOK',
  payload: {
    ...bookObj,
  },
});

export const removeBook = bookObj => ({
  type: 'REMOVE_BOOK',
  payload: {
    ...bookObj,
  },
});

export const filterBooks = (selectedCategory, bookObj) => ({
  type: 'CHANGE_FILTER',
  payload: {
    selectedCategory,
    bookObj,
  },
});
