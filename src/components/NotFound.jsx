import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not-found">
      <h2>404 - Page Not Found</h2>
      <p>Hey there... the page you are looking for does not exist!</p>
      <Link to="/">Return to Home</Link>
    </section>
  );
}
