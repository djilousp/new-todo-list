import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Todo from "../Todo/Todo";

const TodoList = ({
  todos,
  filteredTodos,
  handleCompleteTodos,
  handleDeleteTodos,
}) => {
  return (
    <Table>
      <TableBody>
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            todos={todos}
            handleCompleteTodos={handleCompleteTodos}
            handleDeleteTodos={handleDeleteTodos}
          />
        ))}
      </TableBody>
    </Table>
  );
};

export default TodoList;
