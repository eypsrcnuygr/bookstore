/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';

function mapStateToProps(state) {
  const bookObjForForm = state.booksReducer;
  console.log(bookObjForForm);
  return {
    bookObjForForm,
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
      BookID: props.bookObjForForm.bookObj[props.bookObjForForm.bookObj.length - 1].BookID,
    };
    console.log(props.bookObjForForm.bookObj);
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
    if (e.target.value === '') {
      this.setState({
        title: '',
      });
    } else {
      this.setState({
        title: e.target.value,
      });
    }
  }

  handleChangeForCategory(e) {
    this.setState({
      category: e.target.value,
    });
  }

  handleChangeForAuthor(e) {
    if (e.target.value === '') {
      this.setState({
        author: '',
      });
    } else {
      this.setState({
        author: e.target.value,
      });
    }
  }

  handleChangeForPage(e) {
    if (e.target.value === '') {
      this.setState({
        page: '',
      });
    } else {
      this.setState({
        page: e.target.value,
      });
    }
  }

  handleChangeForDatePublished(e) {
    if (e.target.value === '') {
      this.setState({
        datePublished: '',
      });
    } else {
      this.setState({
        datePublished: e.target.value,
      });
    }
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
    const { create } = this.props;
    this.setState(state => ({ BookID: state.BookID + 1 }),
      async () => {
        await create(this.state);
        this.reset();
      });
  }

  reset() {
    console.log(this.props.bookObjForForm);
    this.setState(state => ({
      title: '',
      author: '',
      page: '',
      datePublished: '',
      category: 'Action',
      read: state.read,
    }));
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const option = [];
    const {
      title, author, page, datePublished, read, category,
    } = this.state;
    for (let i = 0; i < 7; i += 1) {
      option.push(<option key={i} value={categories[i]}>{categories[i]}</option>);
    }
    return (
      <form>
        <input type="text" onChange={this.handleChangeForTitle} value={title} />
        <select name="categories" value={category} id="categories" onChange={this.handleChangeForCategory}>
          {option}
        </select>
        <input type="text" onChange={this.handleChangeForAuthor} value={author} />
        <input type="number" onChange={this.handleChangeForPage} value={page} />
        <input type="date" onChange={this.handleChangeForDatePublished} value={datePublished} />
        <input type="checkbox" onClick={this.handleChangeForRead} value={read} />
        <input type="button" onClick={this.handleClick} value="Yapıştır" />
      </form>
    );
  }
}

BooksForm.propTypes = {
  BookID: PropTypes.instanceOf(Array),
};

BooksForm.propTypes = {
  create: PropTypes.instanceOf(Object),
};

BooksForm.defaultProps = {
  BookID: [],
};

BooksForm.defaultProps = {
  create: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
