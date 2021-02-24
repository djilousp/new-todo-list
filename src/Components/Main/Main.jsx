import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import RadioInput from "../RadioInput/";
import TodoList from "../TodoList";
import data from "../../data";
import Modal from "react-modal";
import { useDropzone } from "react-dropzone";
import { FiUpload as UploadIcon } from "react-icons/fi";
//import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";

Modal.setAppElement("#root");
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

  const { getInputProps } = useDropzone({
    onDrop: () => console.log("image dropped"),
    accept: "image/*",
    multiple: false,
  });
  // create portal to handle creating to-dos
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
        <Grid item container justify="space-between" xs={12}></Grid>
      </Grid>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            background: "rgba(20, 20, 43, 0.45)",
          },
          content: {
            height: 591,
            width: 855,
            top: "calc(50% - 591px/2 + 34.5px)",
            left: "calc(50% - 855px/2 - 0.5px)",
            borderRadius: 24,
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
          },
        }}
      >
        <h1>Create new To-Do</h1>
        <div
          style={{
            height: "60%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <textarea
            style={{
              //maxWidth: 485,
              width: 485,
              height: 64,
              paddingTop: "22.5px ",
              paddingLeft: 30,
              background: "#EFF0F7",
              borderRadius: 16,
              outline: "none",
              border: "none",
              resize: "none",
              lineHeight: "1.5rem",
            }}
            placeholder="Name To-Do"
          />
          <div
            style={{
              width: "485px",
              height: "162px",
              border: "2px dashed #A0A3BD",
              display: "flex",
              background: "#EFF0F7",
              boxSizing: "border-box",
              borderRadius: 16,
              justifyContent: "center",
              alignItems: "center",
            }}
            className="upload-image"
          >
            <label htmlFor="image">
              <UploadIcon style={{ display: "inline-block" }} size={24} />
              <input type="file" name="image" id="image" {...getInputProps()} />
              Insert Image
            </label>
          </div>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            width="20%"
          >
            Create
          </Button>
        </div>
      </Modal>
    </>
  );
}
