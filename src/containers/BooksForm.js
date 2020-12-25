/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions';

function mapStateToProps(state) {
  const {
    category, title, author, page, datePublished, read, BookID,
  } = state.booksReducer.bookObj;
  return {
    category, title, author, page, datePublished, read, BookID,
  };
}

const mapDispatchToProps = dispatch => ({
  createBook: () => dispatch({ type: 'CREATE_BOOK' }),
});

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null,
      title: null,
      author: null,
      page: null,
      datePublished: null,
      read: false,
      id: null,
    };
    this.handleChangeForTitle = this.handleChangeForTitle.bind(this);
    this.handleChangeForCategory = this.handleChangeForCategory.bind(this);
    this.handleChangeForAuthor = this.handleChangeForAuthor.bind(this);
    this.handleChangeForDatePublished = this.handleChangeForDatePublished.bind(this);
    this.handleChangeForPage = this.handleChangeForPage.bind(this);
    this.handleChangeForRead = this.handleChangeForRead.bind(this);
  }

  handleChangeForTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  handleChangeForCategory(e) {
    this.setState({
      category: e.target.value,
    });
  }

  handleChangeForAuthor(e) {
    this.setState({
      author: e.target.value,
    });
  }

  handleChangeForPage(e) {
    this.setState({
      page: e.target.value,
    });
  }

  handleChangeForDatePublished(e) {
    this.setState({
      datePublished: e.target.value,
    });
  }

  handleChangeForRead(e) {
    this.setState({
      read: e.target.value,
    });
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const option = [];
    const bookObj = this.state;
    for (let i = 0; i < 7; i += 1) {
      option.push(<option key={i} value={categories[i]}>{categories[i]}</option>);
    }
    console.log(bookObj);
    return (
      <form>
        <input type="text" onChange={this.handleChangeForTitle} />
        <select name="categories" id="categories" onChange={this.handleChangeForCategory}>
          {option}
        </select>
        <input type="text" onChange={this.handleChangeForAuthor} />
        <input type="number" onChange={this.handleChangeForPage} />
        <input type="date" onChange={this.handleChangeForDatePublished} />
        <input type="checkbox" onClick={this.handleChangeForRead} />
        <input type="button" onClick={() => createBook(bookObj)} value="Yapıştır" />
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
