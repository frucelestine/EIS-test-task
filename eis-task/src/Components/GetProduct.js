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
      search: "",
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

  handleSearch(e) {
    this.setState({ search: e.target.value });
  }

  render() {
    const root = {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
    };
    const searchForm = {
      position: "absolute",
      width: "95%",
      borderRadius: 10,
      marginBottom: 30,
      top: -130,
      left: 19,
      "@media (max-width: 800px)" : {
          left: "13px"
      },
    };

    const filteredItems = this.state.items.filter((item) => {
      return item.name.toLowerCase().indexOf(this.state.search) !== -1;
    });

    return (
      <div style={{position: 'relative'}}>
        <input
          type="search"
          onChange={this.handleSearch.bind(this)}
          value={this.state.search}
          placeholder="search product"
          style={searchForm}
        />
        <div style={root}>
          {filteredItems.map((item) => (
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
      </div>
    );
  }
}

export default GetProduct;
