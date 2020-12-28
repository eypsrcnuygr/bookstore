import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';

function mapStateToProps(state) {
  const bookObjForForm = state.booksReducer;

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
      read: 0,
      BookID: props.bookObjForForm.bookObj[props.bookObjForForm.bookObj.length - 1].BookID,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
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

  reset() {
    this.setState(() => ({
      title: '',
      author: '',
      category: 'Action',
      read: 0,
    }));
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const option = [];

    const {
      title, author, read, category,
    } = this.state;
    for (let i = 0; i < 7; i += 1) {
      option.push(<option key={i} value={categories[i]}>{categories[i]}</option>);
    }
    return (
      <>
        <div className="add-book">
          <h2 id="add-new-book">Add New Book</h2>
          <form>
            <input type="text" onChange={this.handleChange} value={title} name="title" id="title-input" placeholder="Book Title" />
            <select name="category" value={category} id="categories" onChange={this.handleChange}>
              {option}
            </select>
            <input type="text" onChange={this.handleChange} value={author} name="author" placeholder="Author" />
            <input type="number" onChange={this.handleChange} value={read} name="read" />
            <input type="button" onClick={this.handleClick} value="ADD BOOK" className="update-button" />
          </form>
        </div>

      </>

    );
  }
}

BooksForm.propTypes = {
  bookObjForForm: PropTypes.instanceOf(Object),
  create: PropTypes.instanceOf(Object),
};

BooksForm.defaultProps = {
  bookObjForForm: [],
  create: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
