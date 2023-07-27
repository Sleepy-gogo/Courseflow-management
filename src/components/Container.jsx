import PropTypes from "prop-types";

function Container({ addons, children }) {
  return (
    <div
      className={`p-3 ${addons} mx-auto bg-slate-100 rounded-lg shadow-md mb-5`}
    >
      {children}
    </div>
  );
}

Container.propTypes = {
  addons: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Container;
