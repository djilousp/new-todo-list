import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Avatar from "@material-ui/core/Avatar";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles(() => ({
  tableRow: {
    "&$selected, &$selected:hover": {
      backgroundColor: "#DED3FF",
    },
  },
  selected: {},
  paragraph: {
    width: "80%",
    fontFamily: "Poppins",
    color: "#6e7191",
  },
}));
const Todo = ({ todo, handleCompleteTodos, handleDeleteTodos }) => {
  const completeTodo = (id) => handleCompleteTodos(id);
  const deleteTodo = (e, id) => {
    e.stopPropagation();
    handleDeleteTodos(id);
  };
  const classes = useStyles();
  return (
    <TableRow
      hover
      classes={{ selected: classes.selected }}
      selected={todo.completed}
      className={classes.tableRow}
      key={todo.id}
      onClick={() => completeTodo(todo.id)}
    >
      <TableCell
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        component="th"
        scope="row"
      >
        <Checkbox
          checked={todo.completed}
          //onClick={(e) => completeTodo(e, todo.id)}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <Avatar aria-label="avatar" src="" />
        <p
          className={classes.paragraph}
          style={{
            textDecorationLine: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.content}
        </p>
        <IconButton children={<CreateIcon color="primary" />} />
        <IconButton
          onClick={(e) => deleteTodo(e, todo.id)}
          children={<DeleteIcon color="secondary" />}
        />
      </TableCell>
    </TableRow>
  );
};

export default Todo;
