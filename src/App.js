import BookList from './containers/booksList';
import BooksForm from './containers/BooksForm';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BookList />
      <BooksForm />
    </div>
  );
}

export default App;
