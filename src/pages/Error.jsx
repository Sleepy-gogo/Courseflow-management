import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.error(error);
  return <div>Error {error.statusText || error.message}</div>;
}

export default Error;
