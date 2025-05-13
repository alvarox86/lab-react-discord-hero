import "./App.css";
import logo from "./assets/discord-logo-white.png";
import icon from "./assets/menu-icon.png";
import bgImg from "./assets/discord-background.png"

function App() {
  return (
    <div className="App">
      <nav>
        <img src={logo} alt="DiscordLogo" className="discordLogo" />
        <img src={icon} alt="Icon" className="menuIcon" />
      </nav>
      <main>
        <h1>IMAGINE A PLACE...</h1>
        <p>
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
      </main>
      <section className="downloads">
        <div className="btns">
          <button className="downloadBtn">Download for Mac</button>
          <button className="browserBtn">Open Discord in your browser</button>
        </div>
        <img src={bgImg} alt="BackgroundImage" className="bgImg" />
      </section>
    </div>
  );
}

export default App;
