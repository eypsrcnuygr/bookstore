import BookList from './containers/booksList';
import BooksForm from './containers/BooksForm';
import CategoryFilter from './components/categoryFilter';

function App() {
  return (
    <div className="App">
      <BookList />
      <BooksForm />
      <CategoryFilter />
    </div>
  );
}

export default App;
