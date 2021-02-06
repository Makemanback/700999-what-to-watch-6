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

const App = ({title, genre, year, films}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <MainComponent
            title={title}
            genre={genre}
            year={year}
            films={films} />
        </Route>

        <Route exact path='/login'>
          <SignIn />
        </Route>

        <Route exact path='/mylist'>
          <MyList films={films} />
        </Route>

        <Route exact path='/films/:id'>
          <Film films={films} />
        </Route>

        <Route exact path='/films/:id/review'>
          <AddReview />
        </Route>

        <Route exact path='/player/:id'>
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
  films: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default App;
