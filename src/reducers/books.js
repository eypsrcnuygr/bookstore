const initialState = {
  category: 'Sci_Fi',
  name: 'The Devils of the Paradise',
  author: 'Carl Sagan',
  page: 230,
  datePublished: 1980,
  read: true,
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
