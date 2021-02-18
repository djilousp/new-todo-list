import Button from "@material-ui/core/Button";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import emoji from "../../../img/usa-flag.png";
import "./style.css";
const LanguageButton = ({ children }) => {
  return (
    <Button
      startIcon={<img className="emoji" src={emoji} alt="emoji" />}
      endIcon={<KeyboardArrowDownIcon />}
    >
      {children}
    </Button>
  );
};

export default LanguageButton;
