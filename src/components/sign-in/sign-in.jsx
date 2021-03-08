import React, {useRef} from "react";
import PropTypes from "prop-types";
import {useHistory} from 'react-router-dom';
import {connect} from "react-redux";
import ApiService from "../../store/api-actions";

import Footer from '../footer/footer';
import Logo from '../logo/logo';

const api = new ApiService();

const SignIn = ({onSubmit}) => {
  const loginRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();
  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
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
                onClick={() => history.push(`/`)}
                className="sign-in__btn"
                type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
};

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(api.login(authData));
  }
});

export default connect(null, mapDispatchToProps)(SignIn);
