import IconButton from "./IconButton";
import PropTypes from "prop-types";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const MAX_ENCUENTROS = 161;

function validateNumber(n) {
  if (n < 1) return 1;
  if (n > MAX_ENCUENTROS) return MAX_ENCUENTROS;
  return n;
}

function Counter({ state, setState }) {
  const handleAmountChange = (e) => {
    setState(validateNumber(Number(e.target.value)));
  };

  const decreaseEncuentros = () => {
    setState(validateNumber(state - 1));
  };

  const increaseEncuentros = () => {
    setState(validateNumber(state + 1));
  };

  return (
    <div className="flex gap-2 text-lg sm:text-2xl">
      <IconButton icon={faChevronLeft} onClick={decreaseEncuentros} />
      <input
        className="appearance-none font-bold text-center w-20"
        type="number"
        value={state}
        onChange={handleAmountChange}
      />
      <IconButton icon={faChevronRight} onClick={increaseEncuentros} />
    </div>
  );
}

Counter.propTypes = {
  state: PropTypes.number.isRequired,
  setState: PropTypes.func.isRequired,
};

export default Counter;
