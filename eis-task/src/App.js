import React from "react";
import { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Form from "./Components/Form";
import { makeStyles } from "@material-ui/core/styles";
import GetProduct from "./Components/GetProduct";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: "60%",
      margin: "0 auto",
      minHeight: 400,
      padding: "0 20px 20px",
    },
  },
  pageHead: {
    backgroundColor: "rgb(66, 66, 66)",
    margin: "0 0 30px",
    padding: 5,
    color: "#fff",
  },
  search: {
    width: "95%",
    borderRadius: 10,
    marginBottom: 30,
    focus: {
      outline: "none",
    },
  },
}));

const App = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper>
        <h5 className={classes.pageHead}>Product list</h5>
        <input className={classes.search} type="search" name="search" />
        <Form />
        <GetProduct />
      </Paper>
    </div>
  );
};

export default App;
