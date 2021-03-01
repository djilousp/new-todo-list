import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Todo from "../Todo/Todo";
import ReactPaginator from "react-paginate";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  paginatorContainer: {
    position: "absolute",
    right: "4%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "15%",
    marginTop: "20px",
    listStyle: "none",
    color: "#A0A3BD",
    "& a": {
      outline: "none",
      cursor: "pointer",
    },
  },
  prevNextLinks: {
    border: "2px solid #5F2EEA",
    outline: "none",
    borderRadius: "50%",
    cursor: "pointer",
    padding: "5px 12px",
    fontSize: "1.2rem",
    color: "#5F2EEA",
    "&:hover": {
      color: "white",
      background: "#5F2EEA",
    },
  },
  activeLink: {
    color: "black",
  },
}));
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
  const classes = useStyles();
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
        <TableRow>
          <ReactPaginator
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={classes.paginatorContainer}
            previousLinkClassName={classes.prevNextLinks}
            nextLinkClassName={classes.prevNextLinks}
            activeLinkClassName={classes.activeLink}
          />
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TodoList;
