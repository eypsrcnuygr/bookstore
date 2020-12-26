/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
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
        // console.log(`Element is ${element}, index is ${array.indexOf(element)}, given index is ${index}`);

        return array.indexOf(ele) !== index;
      });
      // console.log(`my payload ${action.payload.id}`);
      console.log(state);
      const restElementsId = state.BookID.filter(element => element !== id);
      console.log(id);
      console.log(state.BookID);
      return {
        ...state,
        category: [...state.category].filter(element => element !== category),
        title: [...state.title].filter(element => element !== title),
        author: [...state.author].filter(element => element !== author),
        page: [...state.page].filter(element => element !== page),
        datePublished: [...state.datePublished].filter(element => element !== datePublished),
        read: [...state.read].filter(element => element !== read),
        BookID: [...state.BookID].filter(element => element !== id),
      };
    }
    default:
      return state;
  }
};

export default booksReducer;
