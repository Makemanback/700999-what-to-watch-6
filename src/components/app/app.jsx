import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainComponent from "../main/main";
import AddReview from '../add-review/add-review';
import Film from '../film/film';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import NotFound from "../not-found/not-found";
import filmProp from '../film/film.prop';

const Path = {
  default: `/`,
  login: `/login`,
  myList: `/mylist`,
  filmId: `/films/:id`,
  filmReview: `/films/:id/review`,
  player: `/player/:id`
};

const App = ({title, genre, year, films}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Path.default}>
          <MainComponent
            title={title}
            genre={genre}
            year={year}
            films={films} />
        </Route>

        <Route exact path={Path.login}>
          <SignIn />
        </Route>

        <Route exact path={Path.myList}>
          <MyList films={films} />
        </Route>

        <Route exact path={Path.filmId}>
          <Film films={films} />
        </Route>

        <Route exact path={Path.filmReview}>
          <AddReview />
        </Route>

        <Route exact path={Path.player}>
          <Player />
        </Route>

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
  films: PropTypes.arrayOf(filmProp).isRequired
};

export default App;
