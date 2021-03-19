import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";

import {Path} from '../../const';
import browserHistory from "../../browser-history";


import Main from "../main/main";
import AddReview from '../add-review/add-review';
import FilmContainer from '../film-container/film-container';
// import MyList from '../my-list/my-list';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import NotFound from "../not-found/not-found";
import PrivateRoute from '../private-route/private-route';

const App = () => {

  const renderFilm = (exactPath) => {
    return (
      <Route exact path={exactPath}
        render={({match}) => {
          const {path} = match;
          const filmId = +match.params.id;

          return <FilmContainer path={path} filmId={filmId} />;
        }}
      />
    );
  };


  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={Path.DEFAULT}>
          <Main />;
        </Route>

        <Route exact path={Path.LOGIN}>
          <SignIn />
        </Route>

        {/* <PrivateRoute exact path={Path.MY_LIST}>
          <MyList />
        </PrivateRoute> */}

        {renderFilm(Path.FILM_ID)}
        {renderFilm(Path.MOVIE_DETAILS)}
        {renderFilm(Path.MOVIE_REVIEWS)}

        <PrivateRoute exact path={Path.FILM_REVIEW}
          render={({match}) => {
            const filmId = +match.params.id;

            return <AddReview filmId={filmId} />;
          }}
        />

        <PrivateRoute exact path={Path.PLAYER}
          render={({match}) => {
            const {path} = match;
            const filmId = +match.params.id;

            return <Player path={path} filmId={filmId} />;
          }}
        />

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  match: PropTypes.object
};

export default App;
