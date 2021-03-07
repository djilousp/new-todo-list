export const TodoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO_ACTION":
      return [
        ...state,
        { id: uniq(), content: action.input, completed: false },
      ];
    case "UPDATE_TODO_ACTION":
      return state.map((todo) => {
        if (todo.id === action.payload.id)
          return { ...todo, completed: !todo.completed };
      });
    default:
      break;
  }
};
