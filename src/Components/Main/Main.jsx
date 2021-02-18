import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    width: "90%",
    height: "83.5vh",
    margin: "auto",
    background: "white",
    borderRadius: 24,
    boxShadow: "0px 32px 64px rgba(17, 17, 17, 0.08);",
  },
}));
export default function Main() {
  const classes = useStyles();
  // create portal to handle creating to-dos
  return (
    <>
      <CssBaseline />
      <Paper className={classes.mainContainer}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>item</Paper>
          <Paper className={classes.paper}>item</Paper>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </Paper>
    </>
  );
}
