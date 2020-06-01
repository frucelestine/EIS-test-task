import React, { Component } from "react";
import { Button } from "@material-ui/core";
import result from "../result";
import { Paper } from "@material-ui/core";

class Form extends React.Component {
  constructor() {
    super();
    this.handleImage = this.handleImage.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  state = {
    name: "Product XYZXXX",
    image: "",
    prev: "",
    price: "1$",
    quantity: "1",
    color: "white",
    anchorEl: null,
    display: "none",
  };

  handleClick = (e) => {
    document.getElementById("hiddenFileInput").click();
  };

  handleImage = (e) => {
    if (e.target.files[0]) {
      this.setState({ display: "block" });
      this.setState({ image: e.target.files[0] });
      this.setState({prev:URL.createObjectURL(e.target.files[0])})
    }
  };

  handleForm = (e) => {
    this.setState({ anchorEl: e.currentTarget });
  };

    handleClose = () => {
      this.setState({display:'none'});
    };

  handleUpload = (e) => {
    e.preventDefault();
    const data = {
      image: this.state.image,
      prev:this.state.prev,
      name: this.state.name,
      price: this.state.price,
      quantity: this.state.quantity,
      color: this.state.color,
    };
    result.post("product.json", data).then((res) => {
        window.location.reload(true);
      this.setState({display: 'none'})
    });
  };

  render() {
    const style = {
      display: "none",
    };
    const open = Boolean(this.anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
      <div>
        <input
          id="hiddenFileInput"
          style={{ display: "none" }}
          type="file"
          onChange={this.handleImage}
        />
        <div style={{marginBottom: 15, display: 'flex', justifyContent: 'space-between'}}>
          <Button onClick={this.handleClick} style={{border: '1px solid black'}}>Add product</Button>
        </div>
        <div style={{marginBottom: 15, height: 1, background: 'black'}}></div>
          <form
            onSubmit={this.handleUpload}
            style={{
              display: this.state.display,
              position: "fixed",
              border: "1px solid black",
              borderRadius: 5,
              width: 200,
            //   padding: '0 10px',
              background: "white",
              right: 0,
              top: 10,
            }}
          >
              <h5 style={{background: 'rgb(66, 66, 66)', color: 'white', width: '100%', margin: '0 0 15px', padding: '5px 0'}}>Product detail</h5>
            <img src={this.state.prev} style={{ height: 70, width: 120, borderRadius: 5 }} />
            <br />
            <input
              type="text"
              onChange={(e) => this.setState({ name: e.target.value })}
              value={this.state.name}
              placeholder="Name"
              name="product name"
            />
            <br />
            <input
              type="text"
              onChange={(e) => this.setState({ quantity: e.target.value })}
              value={this.state.quantity}
              placeholder="Quantity"
              name="product quantity"
            />

            <br />
            <input
              type="text"
              onChange={(e) => this.setState({ price: e.target.value })}
              value={this.state.price}
              placeholder="Price"
              name="product price"
            />
            <br />

            <input
              type="text"
              onChange={(e) => this.setState({ color: e.target.value })}
              value={this.state.color}
              placeholder="Color"
              name="product color"
            />
            <div style={{display: 'flex', width: '98%', justifyContent: 'space-between'}}>
              <Button
                type="submit"
                //   className={classes.uploadBtn}
              >
                Save
              </Button>
              <Button onClick={this.handleClose}>Cancel</Button>
            </div>
          </form>
      </div>
    );
  }
}

export default Form;
