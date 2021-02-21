import React from "react";
// import {connect} from 'react-redux';
import PropTypes from "prop-types";
import SmallCard from "../small-card/small-card";
import filmProp from '../film/film.prop';

const CardsList = (props) => {
  const {films} = props;

  return (
    <div className="catalog__movies-list">

      {
        films.map(({id, image, title}) => {
          return (
            <SmallCard key={id} id={id} image={image} title={title} />
          );
        })
      }

    </div>
  );
};

CardsList.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired
};

// const mapDispatchToProps = (dispatch) => ({
//   changeGenre(genre) {
//     dispatch(ActionCreator.changeGenre({
//       genre,

//     }));
//   }
// });

// export default connect(null, mapDispatchToProps)(CardsList);

export default CardsList;

