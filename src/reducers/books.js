const initialState = {
  category: ['Sci_Fi', 'History'],
  title: ['The Devils of the Paradise', 'The History of Civilization'],
  author: ['Carl Sagan', 'Will Durant'],
  page: [380, 520],
  datePublished: [1980, 1981],
  read: [true, false],
  BookID: [1, 2],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK': {
      const { category } = action.payload;
      const { title } = action.payload;
      const { author } = action.payload;
      const { page } = action.payload;
      const { datePublished } = action.payload;
      const { read } = action.payload;
      const { BookID } = action.payload;
      return {
        ...state,
        category: [...state.category, category],
        title: [...state.title, title],
        author: [...state.author, author],
        page: [...state.page, page],
        datePublished: [...state.datePublished, datePublished],
        read: [...state.read, read],
        BookID: [...state.BookID, BookID],
      };
    }
    case 'REMOVE_BOOK': {
      const {
        id, title, author, category, page, datePublished, read,
      } = action.payload;
      const removeKey = (element, array) => array.filter(ele => ele !== element);
      return {
        ...state,
        BookID: removeKey(id, state.BookID),
        category: removeKey(category, state.category),
        title: removeKey(title, state.title),
        author: removeKey(author, state.author),
        page: removeKey(page, state.page),
        datePublished: removeKey(datePublished, state.datePublished),
        read: removeKey(read, state.read),
      };
    }
    default:
      return state;
  }
};

export default booksReducer;
