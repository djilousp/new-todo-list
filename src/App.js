import Button from "@material-ui/core/Button";
import emoji from "./img/usa-flag.png";
import "./style.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div className="language">
          <img className="emoji" src={emoji} alt="emoji" />
          <h3>English</h3>
        </div>
      </header>
    </div>
  );
}

export default App;
