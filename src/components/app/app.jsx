import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import MainComponent from "../main/main";
import AddReview from '../add-review/add-review';
import Film from '../film/film';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import NotFound from "../not-found/not-found";
import filmProp from '../film/film.prop';
import PrivateRoute from '../private-route/private-route';
import {Path} from '../../const';
import browserHistory from "../../browser-history";

const App = ({title, genre, year, films}) => {

  const renderFilm = (exactPath) => {
    return (
      <PrivateRoute exact path={exactPath}
        render={({match}) => {
          const {path} = match;
          return <Film films={films} path={path} />;
        }}
      />
    );
  };


  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={Path.DEFAULT}>
          <MainComponent
            title={title}
            genre={genre}
            year={year}
            films={films}
          />
        </Route>

        <Route exact path={Path.LOGIN}>
          <SignIn />
        </Route>

        <PrivateRoute exact path={Path.MY_LIST}>
          <MyList films={films} />
        </PrivateRoute>

        {renderFilm(Path.FILM_ID)}
        {renderFilm(Path.MOVIE_DETAILS)}
        {renderFilm(Path.MOVIE_REVIEWS)}

        <PrivateRoute exact path={Path.FILM_REVIEW}>
          <AddReview title={title} />
        </PrivateRoute>

        <PrivateRoute exact path={Path.PLAYER}>
          <Player />
        </PrivateRoute>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(filmProp).isRequired,
  match: PropTypes.object
};

export default App;
