import React from 'react';
import { Button } from '../common/Form/index';
import Input from '../common/Input/Input';
import styles from './Entry.module.scss';

const inputCustomize = { 'input-wrap': [], 'input-text': ['entry-input'] };
const buttonCustomize = { 'button-wrap': ['login-button'], 'button-txt': [] };

const LoginForm = () => (
  <form className={styles['entry-form']}>
    <fieldset>
      <legend>Log in</legend>
      <Input placeHolder="✉️ email" classNames={inputCustomize} />
      <Input placeHolder="🔒 password" classNames={inputCustomize} />
    </fieldset>
    <Button text="sign in" classNames={buttonCustomize} />
  </form>
);

export default LoginForm;
