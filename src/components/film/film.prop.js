
import PropTypes from "prop-types";

export default PropTypes.shape({
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
});
