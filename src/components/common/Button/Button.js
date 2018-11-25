import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

class Button extends Component {
  render() {
    const { children, to, ...rest } = this.props;
    const btnTag = ({ children, ...rest }) => <button {...rest}>{children}</button>;
    const linkTag = ({ children, to, ...rest }) => <Link to={to} {...rest}>{children}</Link>;
    const Element = (to) ? linkTag : btnTag;
    return (
      <Element className={styles['button']} to={to}>
        {children}
      </Element>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
};

export default Button;
