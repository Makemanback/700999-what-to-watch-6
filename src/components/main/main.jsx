import React from "react";
import Footer from '../footer/footer';
import MovieCard from "../movie-card/movie-card";

import Catalog from "../catalog/catalog";

const Main = () => {

  return (
    <React.Fragment>

      <MovieCard />

      <div className="page-content">
        <Catalog />

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Main;
