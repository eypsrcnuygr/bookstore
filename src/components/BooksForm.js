const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const option = [];
  for (let i = 0; i < 7; i += 1) {
    option.push(<option key={i} value={categories[i]}>{categories[i]}</option>);
  }
  return (
    <form>
      <input type="text" />
      <select name="categories" id="categories">
        {option}
      </select>
      <input type="text" />
      <input type="number" />
      <input type="date" />
      <input type="checkbox" />
    </form>
  );
};

export default BooksForm;
