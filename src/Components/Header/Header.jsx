import LanguageButton from "../Buttons/LanguageButton";
import "./style.css";
const Header = () => {
  return (
    <header className="App-header">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <LanguageButton>English</LanguageButton>
    </header>
  );
};

export default Header;
