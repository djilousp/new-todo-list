import { createStore, combineReducers } from "redux";
import reducers from "../reducers";
import { todosReducer } from "../reducers/todosReducer";

// export const configureStore = () => {
//   const store = createStore(
//     reducers,
//     undefined //initial state
//   );
//   return store;
// };
export default store = () => {
  createStore(
    combineReducers({
      todos: todosReducer,
      filteredTodos: todosReducer,
    })
  );
};
