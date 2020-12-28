const filterReducer = (filterState = 'All', action) => {
  let selectedCategory;
  let bookObj;

  if (action.payload) {
    selectedCategory = action.payload.selectedCategory;
    bookObj = { ...action.payload.bookObj };
  } else {
    selectedCategory = filterState;
  }

  return {
    selectedCategory,
    bookObj,
  };
};

export default filterReducer;
