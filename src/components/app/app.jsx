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
  Default: `/`,
  Login: `/login`,
  MyList: `/mylist`,
  FilmId: `/films/:id`,
  FilmReview: `/films/:id/review`,
  MovieReviews: `/films/:id/reviews`,
  Player: `/player/:id`,
  MovieDetails: `/films/:id/details`
};

const App = ({title, genre, year, films}) => {

  const renderFilm = (exactPath) => {
    return (
      <Route exact path={exactPath}
        render={({match}) => {
          const {path} = match;
          return <Film films={films} path={path} />;
        }}
      />
    );
  };


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Path.Default}>
          <MainComponent
            title={title}
            genre={genre}
            year={year}
            films={films} />
        </Route>

        <Route exact path={Path.Login}>
          <SignIn />
        </Route>

        <Route exact path={Path.MyList}>
          <MyList films={films} />
        </Route>

        {renderFilm(Path.FilmId)}
        {renderFilm(Path.MovieDetails)}
        {renderFilm(Path.MovieReviews)}

        <Route exact path={Path.FilmReview}>
          <AddReview title={title} />
        </Route>

        <Route exact path={Path.Player}>
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
  films: PropTypes.arrayOf(filmProp).isRequired,
  match: PropTypes.object
};

export default App;
export {Path};
