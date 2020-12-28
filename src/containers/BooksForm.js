/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook, filterBooks } from '../actions';
import CategoryFilter from '../components/categoryFilter';

function mapStateToProps(state) {
  const bookObjForForm = state.booksReducer;
  const selectedFilter = state.filterReducer.selectedCategory;

  return {
    bookObjForForm,
    selectedFilter,
  };
}

const mapDispatchToProps = dispatch => ({
  create: obj => dispatch(createBook(obj)),
  filter: (selectedFilter, bookObj) => dispatch(filterBooks(selectedFilter, bookObj)),
});

const setFilter = (obj = 'All', e) => {
  obj = e.target.value;
  return obj;
};

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

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleChange(evt) {
    const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
    this.setState(state => ({
      ...state,
      [evt.target.name]: value,
    }));
  }

  handleClick() {
    const { create } = this.props;
    this.setState(state => ({ BookID: state.BookID + 1 }),
      async () => {
        await create(this.state);
        this.reset();
      });
  }

  handleFilter(e) {
    const { filter } = this.props;
    filter(setFilter(this.props.bookObjForForm.bookObj, e), this.props.bookObjForForm.bookObj);
  }

  reset() {
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
      <>
        <form>
          <input type="text" onChange={this.handleChange} value={title} name="title" />
          <select name="category" value={category} id="categories" onChange={this.handleChange}>
            {option}
          </select>
          <input type="text" onChange={this.handleChange} value={author} name="author" />
          <input type="number" onChange={this.handleChange} value={page} name="page" />
          <input type="date" onChange={this.handleChange} value={datePublished} name="datePublished" />
          <input type="checkbox" onClick={this.handleChange} value={read} name="read" />
          <input type="button" onClick={this.handleClick} value="Yapıştır" />
        </form>

        <CategoryFilter handleFilter={this.handleFilter} />

      </>

    );
  }
}

BooksForm.propTypes = {
  bookObjForForm: PropTypes.instanceOf(Object),
  selectedFilter: PropTypes.string,
  create: PropTypes.instanceOf(Object),
};

BooksForm.defaultProps = {
  bookObjForForm: [],
  create: {},
  selectedFilter: 'All',
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
