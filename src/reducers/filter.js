const filterReducer = (filterState = 'All', action) => {
  let selectedCategory;

  if (action.payload) {
    selectedCategory = action.payload.selectedCategory;
  } else {
    selectedCategory = filterState;
  }

  return {
    selectedCategory,
  };
};

export default filterReducer;
