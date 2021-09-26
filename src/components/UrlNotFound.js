import { Link } from "react-router-dom";

const UrlNotFound = () => {
  return (
    <div className="container">
      <h1>404</h1>
      <p>URL Not Found or Url Expired</p>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default UrlNotFound;
