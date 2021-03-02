import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import RadioInput from "../RadioInput/";
import TodoList from "../TodoList";
import data from "../../data";
import uniqid from "uniqid";
import TodoModal from "../TodoModal/TodoModal";
// start using Redux for state managment
// create BE in node after using Redux
const useStyles = makeStyles(() => ({
  mainContainer: {
    width: "90%",
    maxHeight: "80vh",
    margin: "auto",
    background: "white",
    borderRadius: 24,
    boxShadow: "0px 32px 64px rgba(17, 17, 17, 0.08);",
    padding: 50,
    overflow: "hidden",
    position: "relative",
  },
  button: {
    borderRadius: 20,
    width: "100%",
  },
  select: {
    overflow: "auto",
  },
}));
export default function Main() {
  const classes = useStyles();
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleCompleteTodos = (key) => {
    const todosUpdated = todos.map((todo) => {
      if (todo.id === key) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(todosUpdated);
  };
  const handleDeleteTodos = (key) => {
    const todosUpdated = todos.filter((todo) => todo.id !== key);
    setTodos(todosUpdated);
  };
  const handleSubmitTodos = () => {
    setTodos([
      ...todos,
      { content: inputText, completed: false, id: uniqid() },
    ]);
    setInputText("");
  };
  useEffect(() => {
    if (todos.length === 0) {
      setTodos(data);
    }
    switch (filter) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncomplete":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
    console.log("second useffect worked");
  }, [todos, filter]);

  return (
    <>
      <CssBaseline />
      <Grid container className={classes.mainContainer} spacing={4}>
        <Grid item container justify="space-between" xs={12}>
          <Grid item xs={3}>
            <h1>To-Do List App</h1>
          </Grid>
          <Grid item xs={2}>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() => setModalIsOpen(true)}
            >
              Add to-do
            </Button>
          </Grid>
        </Grid>
        <Grid item container justify="space-between" xs={12}>
          <Grid item xs={4}>
            <RadioInput setFilter={setFilter} />
          </Grid>
        </Grid>
        <Grid item container justify="space-between" xs={12}>
          <TodoList
            filteredTodos={filteredTodos}
            handleCompleteTodos={handleCompleteTodos}
            handleDeleteTodos={handleDeleteTodos}
          />
        </Grid>
      </Grid>
      <TodoModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        handleSubmitTodos={handleSubmitTodos}
        setInputText={setInputText}
        inputText={inputText}
      />
    </>
  );
}
