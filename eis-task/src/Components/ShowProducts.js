import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    margin: "0 15px 15px",
    background: "rgb(240, 240, 240)",
    borderRadius: 5,
    padding: "20px 20px",
    "& > p": {
      margin: 0,
      textAlign: "left",
    },
  },
  itemHead: {
    textAlign: "center !important",
    marginBottom: '5px !important',
    
  },
  deleteBtn: {
    textAlign: "left",
    "& > *": {
      border: "none",
      background: "none",
      padding: 0,
      width: 20,
      height: 20,
      fontWeight: 900,
    },
  },
});
const ShowProducts = (props) => {
  const classes = useStyles(props);
  const checkQuantity = () => {
    if (props.quantity.length == 0 || props.quantity == "0") {
      return "Out of order";
    } else return props.quantity;
  };
  return (
    <div className={classes.root}>
      <p className={classes.itemHead}>{props.name}</p>
      <img src={props.prev} style={{ height: 70, width: 120 }} />
      <p>price: {props.price}</p>
      <p>quantity: {checkQuantity()}</p>
      <p>color: {props.color}</p>
      <div className={classes.deleteBtn}>
        <button onClick={props.delete}>x</button>
      </div>
    </div>
  );
};

export default ShowProducts;
