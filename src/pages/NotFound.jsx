import { Link } from "react-router";
import useTitle from "../hooks/useTitle";
import PageHeader from "../components/PageHeader";

export default function NotFound() {
  useTitle("Page not found");

  return (
    <>
      <PageHeader title="Page not found" lead="This page doesn't exist or has moved." />
      <div className="wrap flex gap-6 text-lg font-medium">
        <Link to="/" className="link">
          Go to the home page
        </Link>
        <Link to="/work" className="link">
          See my work
        </Link>
      </div>
    </>
  );
}
