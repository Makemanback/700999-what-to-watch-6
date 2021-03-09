import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {AuthorizationStatus, Path} from '../../const';

const UserBlockAvatar = () => {
  return (
    <div className="user-block__avatar">
      <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
    </div>
  );
};

const UserBlock = ({authorizationStatus}) => {

  const signedIn = authorizationStatus === AuthorizationStatus.AUTH
    ? <UserBlockAvatar />
    : `Sign In`;

  return (
    <div className="user-block">
      <Link to={Path.LOGIN} className="user-block__link">{signedIn}</Link>
    </div>
  );
};

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({authorizationStatus}) => ({
  authorizationStatus,
});

export default connect(mapStateToProps)(UserBlock);
