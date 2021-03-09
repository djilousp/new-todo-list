import Header from "./Components/Header";
import Main from "./Components/Main";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./style.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
