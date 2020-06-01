import React from "react";
import { Button } from '@material-ui/core'
const style = {
    color: 'blue'
}
const ShowProducts = (props) => (
    <div style={{margin:'0 15px 15px', border: '1px solid black', borderRadius: 5, padding: '0 10px'}}>
    <p>{props.name}</p>
    <img src={props.prev} style={{height: 70, width: 120}}/>
    <p style={{textAlign: 'left'}}>price: {props.price}</p>
    <p style={{textAlign: 'left'}}>quantity: {props.quantity}</p>
    <p style={{textAlign: 'left'}}>color: {props.color}</p>
    <div style={{textAlign: 'left'}}><button onClick={props.delete}>x</button></div>
  </div>
);

export default ShowProducts;
