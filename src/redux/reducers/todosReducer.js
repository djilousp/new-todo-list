export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO_ACTION":
      return [
        ...state,
        { id: uniq(), content: action.input, completed: false },
      ];
    case "UPDATE_TODO_ACTION":
      return state.filter((todo) => todo.id !== action.payload.id);

    default:
      break;
  }
};
