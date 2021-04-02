import React from "react";
import PropTypes from "prop-types";
import {Switch, Route} from "react-router-dom";

import {Path} from '../../const';
import browserHistory from "../../browser-history";

import Main from "../main/main";
import AddReview from '../add-review/add-review';
import FilmContainer from '../film-container/film-container';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import NotFound from "../not-found/not-found";
import PrivateRoute from '../private-route/private-route';

const App = () => {

  return (
      <Switch>
        <Route exact path={Path.DEFAULT}>
          <Main />
        </Route>

        <Route exact path={Path.LOGIN}>
          <SignIn history={browserHistory} />
        </Route>

        <PrivateRoute
          exact
          path={Path.MY_LIST}
          render={() => <MyList />}
        />

        <Route
          exact
          path={Path.FILM_ID}
          render={() => <FilmContainer />}
        />

        <PrivateRoute
          exact
          path={Path.FILM_REVIEW}
          render={() => <AddReview />}
        />

        <PrivateRoute
          exact
          path={Path.PLAYER}
          render={() => <Player />}
        />

        <Route>
          <NotFound />
        </Route>
      </Switch>
  );
};

App.propTypes = {
  match: PropTypes.object
};

export default App;
