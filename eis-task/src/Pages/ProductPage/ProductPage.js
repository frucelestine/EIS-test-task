import React, { Component } from "react";
import PopUpForm from "../../Components/PopUpForm/PopUpForm";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: "60%",
      margin: "0 auto",
      minHeight: 400,
      //   height: theme.spacing(16),
    },
  },
  pageHead: {
    backgroundColor: "rgb(66, 66, 66)",
    margin: '0 0 30px',
    padding: 5,
    color: "#fff",
  },
  search:{
      width: '90%',
      borderRadius: 10,
      marginBottom: 30,
      'focus':{
          outline: 'none',
      }
  }
}));

const ProductPage = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper>
        <h5 className={classes.pageHead}>Product list</h5>
        <input className={classes.search} type='search' name='search'/>
        <PopUpForm />
        {/* <img src={url}/> */}
      </Paper>
    </div>
  );
};

export default ProductPage;
