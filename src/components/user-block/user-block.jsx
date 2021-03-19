import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux';
import {AuthorizationStatus, Path} from '../../const';

const UserBlockAvatar = () => {
  return (
    <div className="user-block__avatar">
      <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
    </div>
  );
};

const UserBlock = () => {

  const {authorizationStatus} = useSelector(({USER}) => USER);

  const signedIn = authorizationStatus === AuthorizationStatus.AUTH
    ? <UserBlockAvatar />
    : `Sign In`;

  return (
    <div className="user-block">
      <Link to={Path.LOGIN} className="user-block__link">{signedIn}</Link>
    </div>
  );
};

export default UserBlock;
