import React, { Component } from 'react';
import { CheckBox, Button } from '../common/Form/index';
import Input from '../common/Input/Input';
import styles from './Entry.module.scss';

const checkboxCustomize = { 'checkbox-label': ['sign-checkbox-label'], 'checkbox-input': [], 'checkbox-mark': [] };

class SignForm extends Component {
  state = {
    email: '',
    username: '',
    password: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, username, password } = this.state;
    return (
      <form className={styles['entry-form']}>
        <fieldset>
          <legend>Sign up</legend>
          <Input
            id="email"
            name="email"
            value={email}
            type="email"
            placeHolder="✉️ email"
            autoComplete="off"
            handleChange={this.handleChange}
          />
          <Input
            id="username"
            name="username"
            value={username}
            type="text"
            placeHolder="😀 username"
            autoComplete="off"
            handleChange={this.handleChange}
          />
          <Input
            id="password"
            name="password"
            value={password}
            type="password"
            placeHolder="🔒 password"
            autoComplete="new-password"
            handleChange={this.handleChange}
          />
        </fieldset>
        <div className={styles.desc}>
          <CheckBox classNames={checkboxCustomize} />
          <p>
            I understand and agree to Waffle’s
            {' '}
            <br />
            <a className={styles.highlight}>Terms of Service</a>
            {' '}
            and
            <a className={styles.highlight}>Privacy Policy</a>
            .
          </p>
        </div>
        <Button text="sign up" />
        <span />
      </form>
    );
  }
}

export default SignForm;
