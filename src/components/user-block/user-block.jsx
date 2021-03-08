import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {AuthorizationStatus, Path} from '../../const';

const UserBlock = ({authorizationStatus}) => {

  const checkSignIn = () => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      return (
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      );
    }
    return <Link to={Path.LOGIN} className="user-block__link">Sign in</Link>;
  };

  return (
    <div className="user-block">
      {checkSignIn()}
    </div>
  );
};

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({authorizationStatus}) => ({
  authorizationStatus
});

export default connect(mapStateToProps)(UserBlock);
