const initialState = {
  bookObj: {
    category: 'Sci_Fi',
    title: 'The Devils of the Paradise',
    author: 'Carl Sagan',
    page: 230,
    datePublished: 1980,
    read: true,
    BookID: 1,
  },
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'toggleRead':
      return { ...state, read: !state.read };
    default:
      return state;
  }
};

export default booksReducer;
