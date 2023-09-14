import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function IconButton({ icon, onClick }) {
  return (
    <button onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}

export default IconButton;
