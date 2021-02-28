import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Todo from "../Todo/Todo";
import ReactPaginator from "react-paginate";
const TodoList = ({
  todos,
  filteredTodos,
  handleCompleteTodos,
  handleDeleteTodos,
}) => {
  const [pageNumber, setPageNumber] = useState(0);
  const todosPerPage = 5;
  const pageVisited = pageNumber * todosPerPage;
  const pageCount = Math.ceil(filteredTodos.length / todosPerPage);
  const changePage = ({ selected }) => setPageNumber(selected);
  return (
    <Table>
      <TableBody>
        {filteredTodos
          .slice(pageVisited, pageVisited + todosPerPage)
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              todos={todos}
              handleCompleteTodos={handleCompleteTodos}
              handleDeleteTodos={handleDeleteTodos}
            />
          ))}
        <ReactPaginator
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={changePage}
        />
      </TableBody>
    </Table>
  );
};

export default TodoList;
