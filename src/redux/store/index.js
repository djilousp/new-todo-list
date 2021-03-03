import { createStore } from "react-redux";
import reducers from "../reducers";

export const configureStore = () => {
  const store = createStore(
    reducers,
    undefined //initial state
  );
  return store;
};
