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

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>🌿 Fehrnström-Gröhn</title>
      <h1 style={headingStyles}>🌿 Fehrnström-Gröhn</h1>
    </main>
  );
};

export default IndexPage;
