import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import styles from './login-screen.module.scss';
import Button from '../button/button';
import Message from '../message/message';
import PageHeader from '../page-header/page-header';
import { login } from '../../store/api-actions';
import { getAuthStatus } from '../../store/selectors';
import { AuthorizationStatus, AppRoutes } from '../../constants';

const EMAIL_FORMAT = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

const validationRules = {
  email: {
    validate: (value) => value.match(EMAIL_FORMAT),
    message: 'Please enter a valid email address',
  },

  password: {
    validate: (value) => value.trim().length !== 0,
    message: 'Password field cannot be empty',
  },
};

const validateFields = (formData) => {
  const errors = [];

  Object.keys(formData).forEach((fieldName) => {
    const fieldValidation = validationRules[fieldName];
    const isValid = fieldValidation.validate(formData[fieldName]);

    if (!isValid) {
      errors.push({
        field: fieldName,
        message: fieldValidation.message,
      });
    }
  });
  return errors;
};

const getErrorsMessage = (errors) => errors.map(({message}) => message).join('. ');

function LoginScreen () {
  const [formErrors, setFormErrors] = useState(null);

  const dispatch = useDispatch();
  const authorizationStatus = useSelector(getAuthStatus);
  const emailRef = useRef();
  const passwordRef = useRef();

  const onSubmit = (authData) => {
    dispatch(login(authData));
    return <Redirect to={AppRoutes.ROOT} />;
  };

  const handleSubmit = (evt) => {
    const formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    evt.preventDefault();
    const errors = validateFields(formData);
    (errors.length === 0) && onSubmit(formData);
    setFormErrors(errors);
  };

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return <Redirect to={AppRoutes.ROOT} />;
  }

  return (
    <React.Fragment>
      <PageHeader isLogin />
      <div className={classNames('row justify-content-center', 'align-items-center', 'flex-column', styles.container)}>
        <div className={'col-8 col-md-6'}>
          <h1 className='text-center'>Вход в аккаунт</h1>
          {formErrors && <Message>{getErrorsMessage(formErrors)}</Message>}


        </div>
        <div className={'col-8 col-md-3'}>
          <form
            action='#'
            onSubmit={handleSubmit}
          >
            <div>
              <div >
                <input
                  ref={emailRef}
                  className={classNames(styles.input)}
                  type='text'
                  placeholder='Email address'
                  name='user-email'
                  id='user-email'
                  data-testid='email'
                />
                <label className='visually-hidden' htmlFor='user-email'>Email address</label>
              </div>
              <div>
                <input
                  ref={passwordRef}
                  className={classNames(styles.input)}
                  type='password'
                  placeholder='Password'
                  name='user-password'
                  id='user-password'
                  data-testid='password'
                />
                <label className='visually-hidden' htmlFor='user-password'>Password</label>
              </div>
            </div>
            <Button
              modifier='dark'
              className={styles.submit}
              type='submit'
            >
              Войти
            </Button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LoginScreen;
