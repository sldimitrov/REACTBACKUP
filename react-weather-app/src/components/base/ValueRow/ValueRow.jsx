export default function ValueRow({ parameter, value, image }) {
  return (
    <div class="row">
      <p class="w-characteristics">{parameter}</p>
      <p id="temp-max">{value}</p>
      <img src={image} alt="hot" />
    </div>
  );
}
