import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const navBar = () => (
  <>
    <nav>
      <a href="https://medium.com/@sercanuygur" id="CMS">Bookstore CMS</a>
      <a href="https://medium.com/@sercanuygur">Books</a>
      <a href="https://medium.com/@sercanuygur">Categories</a>
      <button className="btn" type="button">
        Sercan
        <i className="fa fa-home" />
      </button>
    </nav>
  </>
);

export default navBar;
