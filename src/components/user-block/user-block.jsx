import React from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';

import ApiService from '../../store/api-actions';
import {AuthorizationStatus, Path} from '../../const';

const apiService = new ApiService();

const UserBlockAvatar = () => {
  return (
    <div className="user-block__avatar">
      <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
    </div>
  );
};

const UserBlock = () => {

  const dispatch = useDispatch();

  const {authorizationStatus} = useSelector(({USER}) => USER);

  const signedIn = authorizationStatus === AuthorizationStatus.AUTH
    ? <UserBlockAvatar />
    : `Sign In`;

  return (
    <div className="user-block">
      <Link
        to={Path.MY_LIST}
        onClick={() => dispatch(apiService.fetchFavoriteFilms())}
        className="user-block__link">
          {signedIn}
      </Link>
    </div>
  );
};

export default UserBlock;
