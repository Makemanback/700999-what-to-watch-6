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
  filmReviews: `/films/:id/reviews`,
  player: `/player/:id`,
  filmDetails: `/films/:id/details`
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

        {renderFilm(Path.filmId)}
        {renderFilm(Path.filmDetails)}
        {renderFilm(Path.filmReviews)}

        <Route exact path={Path.filmReview}>
          <AddReview title={title} />
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
  films: PropTypes.arrayOf(filmProp).isRequired,
  match: PropTypes.object
};

export default App;
export {Path};
