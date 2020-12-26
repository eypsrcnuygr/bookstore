/* eslint-disable max-len */
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
      const removeKey = (element, array, index) => array.filter(ele => {
        console.log(`Element is ${element}, index is ${array.indexOf(element)}, given index is ${index}`);

        return array.indexOf(ele) !== index;
      });
      console.log(state.category.indexOf(category));
      return {
        ...state,
        BookID: removeKey(id, state.BookID, state.BookID.indexOf(id)),
        category: removeKey(category, state.category, state.category.indexOf(category)),
        title: removeKey(title, state.title, state.title.indexOf(title)),
        author: removeKey(author, state.author, state.author.indexOf(author)),
        page: removeKey(page, state.page, state.page.indexOf(page)),
        datePublished: removeKey(datePublished, state.datePublished, state.datePublished.indexOf(datePublished)),
        read: removeKey(read, state.read, state.read.indexOf(read)),
      };
    }
    default:
      return state;
  }
};

export default booksReducer;
