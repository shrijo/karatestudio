import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      404 Page not found
      <Link to="/">Home</Link>
    </div>
  );
}

export default NotFoundPage;
