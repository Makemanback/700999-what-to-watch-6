import PropTypes from "prop-types";

export default PropTypes.shape({
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
});
