import React, {useRef} from "react";
import {Route, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import ApiService from "../../store/api-actions";
import {AuthorizationStatus, Path} from '../../const';
import {redirectToRoute} from '../../store/action';
import browserHistory from "../../browser-history";

import Main from '../main/main';
import Footer from '../footer/footer';
import Logo from '../logo/logo';

const apiService = new ApiService();

const SignIn = () => {

  const {authorizationStatus} = useSelector(({USER}) => USER);

  const dispatch = useDispatch();
  const loginRef = useRef();
  const passwordRef = useRef();

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return <Redirect to={Path.DEFAULT} />
  }


  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(apiService.login({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    }));
  };

  return (
    <React.Fragment>
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form
            onSubmit={handleSubmit}
            action=""
            className="sign-in__form"
          >
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  ref={loginRef}
                  autoComplete="username"
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email" />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input
                  ref={passwordRef}
                  autoComplete="current-password"
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password" />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button
                className="sign-in__btn"
                type="submit"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default SignIn;
