export default function ({ children }) {
  return (
    <section class="forecast-container">
      <heading id="forecast-heading-container">
        <h4 id="forecast-heading">THUNDERSTORM WITH LIGHT DRIZZLE</h4>
      </heading>
      {children}
      <span class="blank-line" id="blank-container"></span>
    </section>
  );
}
