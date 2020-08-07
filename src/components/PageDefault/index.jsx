import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer';
import Header from '../Header';
import './index.css';

function PageDefault({ children }) {
  return (
    <>
      <Header />
      <div className="mainBody">
        {children}
      </div>
      <Footer />
    </>
  );
}

PageDefault.propTypes = {
  children: PropTypes.arrayOf(Array).isRequired,
};

export default PageDefault;
