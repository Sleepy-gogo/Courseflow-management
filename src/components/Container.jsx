import PropTypes from "prop-types";
import { cn } from "../utilities/utils";

function Container({ className, children }) {
  return (
    <div
      className={cn(
        "p-3 border-box mx-auto bg-slate-100 rounded-lg shadow-md mb-5",
        className
      )}
    >
      {children}
    </div>
  );
}

Container.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Container;
