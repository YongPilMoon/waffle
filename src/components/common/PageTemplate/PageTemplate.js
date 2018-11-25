import React from 'react';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import styles from './PageTemplate.module.scss';
import PropTypes from 'prop-types';


const PageTemplate = ({ children }) => (
  <div className={styles['page-template']}>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </div>
);

PageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTemplate;
