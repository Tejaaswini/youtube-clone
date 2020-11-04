import "./App.css";
import icon from "./assets/yt.svg";
import YoutubeClone from "./components/YoutubeClone";

function App() {
  return (
    <div>
      <div className="App">
        <img src={icon} alt="" className="icon" />
        <h2>Youtube Clone</h2>
      </div>
      <YoutubeClone />
    </div>
  );
}

export default App;
