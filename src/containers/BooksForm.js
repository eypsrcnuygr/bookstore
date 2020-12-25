/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions';

function mapStateToProps(state) {
  const {
    category, title, author, page, datePublished, read, BookID,
  } = state.booksReducer;
  return {
    category, title, author, page, datePublished, read, BookID,
  };
}

const mapDispatchToProps = dispatch => ({
  create: obj => dispatch(createBook(obj)),
});

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'Action',
      title: '',
      author: '',
      page: '',
      datePublished: '',
      read: false,
      BookID: props.BookID[props.BookID.length - 1],
    };
    this.handleChangeForTitle = this.handleChangeForTitle.bind(this);
    this.handleChangeForCategory = this.handleChangeForCategory.bind(this);
    this.handleChangeForAuthor = this.handleChangeForAuthor.bind(this);
    this.handleChangeForDatePublished = this.handleChangeForDatePublished.bind(this);
    this.handleChangeForPage = this.handleChangeForPage.bind(this);
    this.handleChangeForRead = this.handleChangeForRead.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
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
    if (e.target.checked) {
      this.setState({
        read: true,
      });
    } else {
      this.setState({
        read: false,
      });
    }
  }

  handleClick() {
    this.setState(state => ({ BookID: state.BookID + 1 }),
      async () => {
        await this.props.create(this.state);
        this.reset();
      });
  }

  reset() {
    this.setState({
      title: '',
      author: '',
      page: '',
      datePublished: '',
      category: 'Action',
      BookID: this.props.BookID[this.props.BookID.length - 1],
    });
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const option = [];
    for (let i = 0; i < 7; i += 1) {
      option.push(<option key={i} value={categories[i]}>{categories[i]}</option>);
    }
    return (
      <form>
        <input type="text" onChange={this.handleChangeForTitle} value={this.state.title} />
        <select name="categories" id="categories" onChange={this.handleChangeForCategory}>
          {option}
        </select>
        <input type="text" onChange={this.handleChangeForAuthor} value={this.state.author} />
        <input type="number" onChange={this.handleChangeForPage} value={this.state.page} />
        <input type="date" onChange={this.handleChangeForDatePublished} value={this.state.datePublished} />
        <input type="checkbox" onClick={this.handleChangeForRead} value={this.state.read} />
        <input type="button" onClick={this.handleClick} value="Yapıştır" />
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
