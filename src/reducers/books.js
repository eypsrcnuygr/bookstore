const initialState = {
  bookObj: [
    {
      category: 'Sci-Fi',
      title: 'The Devils of the Paradise',
      author: 'Carl Sagan',
      read: 0,
      BookID: 1,
    },
    {
      category: 'History',
      title: 'The History of Civilization',
      author: 'Will Durant',
      read: 0,
      BookID: 2,
    },
  ],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK': {
      const { bookObj } = state;
      bookObj.push(action.payload);

      return {
        bookObj,
      };
    }
    case 'REMOVE_BOOK': {
      const bookObjRemoved = action.payload;
      const bookObj = { ...state }.bookObj
        .filter(element => element.BookID !== bookObjRemoved.BookID);

      return {
        bookObj,
      };
    }
    default:
      return state;
  }
};

export default booksReducer;
