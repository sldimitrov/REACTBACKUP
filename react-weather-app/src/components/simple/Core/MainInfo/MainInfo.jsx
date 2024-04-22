import cloudImg from "../../../images/Cloud.png";

export default function MainInfo() {
  return (
    <div class="info-container basic-font">
      <p class="current-temperature">16°</p>
      <section class="basic-font" id="additional-info">
        <heading id="city">London</heading>
        <p id="date">06:09 - Monday, 9 Sep ‘23</p>
      </section>
      <img src={cloudImg} alt="cloud" id="cloud-img" />
    </div>
  );
}
