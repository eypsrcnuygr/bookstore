const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form>
      <input type="text" />
      <select name="categories" id="categories">
        <option value={categories[0]}>{categories[0]}</option>
        <option value={categories[1]}>{categories[1]}</option>
        <option value={categories[2]}>{categories[2]}</option>
        <option value={categories[3]}>{categories[3]}</option>
        <option value={categories[4]}>{categories[4]}</option>
        <option value={categories[5]}>{categories[5]}</option>
        <option value={categories[6]}>{categories[6]}</option>
      </select>
      <input type="text" />
      <input type="number" />
      <input type="date" />
      <input type="checkbox" />
    </form>
  );
};

export default BooksForm;
