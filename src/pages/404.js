import { Link } from "gatsby";
import * as React from "react";

const pageStyles = {
  width: "100vw",
  height: "100vh",
  padding: 96,

  background: "#f0f0f0",
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const headingStyles = {
  fontSize: 40,
};

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Sidan finns inte – 🌿 Fehrnström-Gröhn</title>
      <h1 style={headingStyles}>Sidan finns inte</h1>
      <p>
        <Link to="/">Gå till startsidan</Link>
      </p>
    </main>
  );
};

export default NotFoundPage;
