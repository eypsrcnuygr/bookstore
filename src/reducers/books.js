const initialState = {
  bookObj: {
    category: ['Sci_Fi', 'History'],
    title: ['The Devils of the Paradise', 'The History of Civilization'],
    author: ['Carl Sagan', 'Will Durant'],
    page: [380, 520],
    datePublished: [1980, 1981],
    read: [true, false],
    BookID: [1, 2],
  },
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK': {
      const { id, bookObj } = action.payload;
      return {
        ...state,
        BookID: state.BookID + id,
        state: bookObj,
      };
    }
    case 'REMOVE_BOOK': {
      const { id, bookObj } = action.payload;
      const indexOfId = bookObj.BookID.indexOf(id);
      return {
        ...state,
        BookID: state.BookID.splice(indexOfId, 1),
        state: bookObj,
      };
    }
    default:
      return state;
  }
};

export default booksReducer;
