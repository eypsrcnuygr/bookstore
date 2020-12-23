const initialState = {
  bookObj: {
    category: ['Sci_Fi', 'Sci_Fi'],
    title: ['The Devils of the Paradise', 'The Devils of the Paradise'],
    author: ['Carl Sagan', 'Carl Sagan'],
    page: [230, 230],
    datePublished: [1980, 1981],
    read: [true, false],
    BookID: [1, 2],
  },
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'toggleRead':
      return { ...state, read: !state.bookObj.read };
    default:
      return state;
  }
};

export default booksReducer;
