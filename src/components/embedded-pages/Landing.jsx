import "./Landing.css";

export default function Landing() {
  return (
    <div id="col-container">
      <div id="left-container">
        <div>
          <h1 class="name">
            <b>
              <i>Daniel</i>
            </b>
          </h1>
          <h1 class="name">
            <b>
              <i>Durling</i>
            </b>
          </h1>
        </div>

        <h2 id="subtitle">
          Software & Web Dev, UI/UX, Linux, Video Production{" "}
        </h2>
      </div>

      <div id="right-container">
        <img
          src="/images/me.webp"
          alt="Portrait photo of me"
          id="portrait"
          class="rounded-box"
        />
      </div>
    </div>
  );
}
