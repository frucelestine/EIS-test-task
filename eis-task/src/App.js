import React from "react";
import Paper from "@material-ui/core/Paper";
import Form from "./Components/Form";
import { makeStyles } from "@material-ui/core/styles";
import GetProduct from "./Components/GetProduct";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      // margin: theme.spacing(1),
      width: "70%",
      margin: "0 auto",
      minHeight: 400,
      padding: "0 0 20px",
      "@media (max-width: 800px)": {
        width: "100%"
      },
    },
  },
  pageHead: {
    backgroundColor: "rgb(66, 66, 66)",
    margin: "0 0 90px",
    padding: 5,
    color: "#fff",
  },
  search: {
    focus: {
      outline: "none",
    },
  },
});

const App = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper>
        <h5 className={classes.pageHead}>Product list</h5>
        <Form />
        <GetProduct />
      </Paper>
    </div>
  );
};

export default App;
