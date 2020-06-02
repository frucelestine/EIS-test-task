import React, { Component } from "react";
import result from "../result";
import ShowProducts from "./ShowProducts";
import { makeStyles } from "@material-ui/core/styles";



class GetProduct extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    result.get("/product.json").then((res) => {
      console.log("Get: ", res);
      const fetchedItems = [];
      for (let key in res.data) {
        fetchedItems.push({
          ...res.data[key],
          id: key,
        });
      }
      this.setState({ items: fetchedItems });
    });
  }

  onDelete = (itemId) => {
    result.delete("/product/" + itemId + ".json").then((res) => {
      window.location.reload(true);
    });
  };

  render() {
      const  root = {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }

    return (
      <div style={root}>
        {this.state.items.map((item) => (
          <ShowProducts
            key={item.id}
            prev={item.prev}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            color={item.color}
            delete={this.onDelete.bind(this, item.id)}
          />
        ))}
      </div>
    );
  }
}

export default GetProduct;
