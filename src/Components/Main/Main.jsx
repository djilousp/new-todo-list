import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Todo from "../Todo";
import { DataGrid } from "@material-ui/data-grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import RadioInput from "../RadioInput/RadioInput";

const useStyles = makeStyles(() => ({
  mainContainer: {
    width: "90%",

    margin: "auto",
    background: "white",
    borderRadius: 24,
    boxShadow: "0px 32px 64px rgba(17, 17, 17, 0.08);",
    padding: 50,
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
            >
              Add to-do
            </Button>
          </Grid>
        </Grid>
        <Grid item container justify="space-between" xs={12}>
          <Grid item xs={4}>
            <RadioInput />
          </Grid>
        </Grid>
        <Grid item container justify="space-between" xs={12}>
          <Todo />
        </Grid>
      </Grid>
    </>
  );
}
