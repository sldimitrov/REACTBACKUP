import React from "react";

export default function Parent({ children }) {
  return (
    <section className="section">
      <h1>PARENT CONTAINER</h1>
      {children}
    </section>
  );
}
