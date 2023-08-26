import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function IconButton({ icon, onClick }) {
  return (
    <button onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}

IconButton.propTypes = {
  icon: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default IconButton;
