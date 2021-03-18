import PropTypes from "prop-types";

export default PropTypes.shape({
  comment: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  rating: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number
});
