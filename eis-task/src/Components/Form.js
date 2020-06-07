import React from "react";
import { Button } from "@material-ui/core";
import result from "../result";
// import { Paper } from "@material-ui/core";
import Dropzone from "react-dropzone";

class Form extends React.Component {
  constructor() {
    super();
    this.handleImage = this.handleImage.bind(this);
    // this.handleForm = this.handleForm.bind(this);
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
      this.setState({ prev: URL.createObjectURL(e.target.files[0]) });
    }
  };

  handleDrop = (acceptedFiles) => {
    if (acceptedFiles) {
      this.setState({ display: "block" });
      this.setState({ image: acceptedFiles });
      this.setState({ prev: URL.createObjectURL(acceptedFiles[0]) });
    }
  };

//   handleForm = (e) => {
//     this.setState({ anchorEl: e.currentTarget });
//   };

  handleClose = (e) => {
      e.preventDefault();
    this.setState({ display: "none" });
  };

  handleUpload = (e) => {
    e.preventDefault();
    const data = {
      image: this.state.image,
      prev: this.state.prev,
      name: this.state.name,
      price: this.state.price,
      quantity: this.state.quantity,
      color: this.state.color,
    };
    result.post("product.json", data).then((res) => {
      window.location.reload(true);
      this.setState({ display: "none" });
    });
  };

  render() {
    const style = {
      display: "none",
    };
    const open = Boolean(this.anchorEl);
    const id = open ? "simple-popover" : undefined;
    const root = {
      display: this.state.display,
      zIndex: 99,
      position: "fixed",
      border: "1px solid black",
      borderRadius: 5,
      width: 200,
      background: "white",
      right: 30,
      top: 10,
    };

    const formHead = {
      background: "rgb(66, 66, 66)",
      color: "white",
      width: "100%",
      margin: "0 0 15px",
      padding: "5px 0",
    };
    const uploadGroup = {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "90%",
      margin: "0 auto 15px",
    };

    const formPrev = {
      height: 70,
      width: 120,
      borderRadius: 5,
    };

    const formBtnContainer = {
      display: "flex",
      width: "87%",
      margin: "0 auto",
      justifyContent: "space-between",
      padding: "15px 0",
    };

    const formBtn = {
      border: "1px solid black",
      cursor: "pointer",
    };

    const formInput = {
      marginBottom: 10,
    };

    const drop = {
      background: "rgb(226, 224, 224)",
      textAlign: "left",
      width: "75%",
      padding: "12px 15px",
    };

    return (
      <div>
        <input
          id="hiddenFileInput"
          style={{ display: "none" }}
          type="file"
          onChange={this.handleImage}
        />
        {/* <input
          id="hiddenFileInput"
          style={{ display: "none" }}
          type="file"
          onChange={this.handleImage}
        /> */}
        <div style={uploadGroup}>
          <Button
            onClick={this.handleClick}
            style={{ border: "1px solid black" }}
          >
            Add product
          </Button>
          <Dropzone
            noClick={true}
            onDrop={(acceptedFiles) => {
              this.handleDrop(acceptedFiles);
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <section style={drop}>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  or drop your product here!
                </div>
              </section>
            )}
          </Dropzone>
          {/* <div style={drop}>or drop your product here!</div> */}
        </div>
        <div style={{ margin: '0 auto 15px', height: 1, background: "black", width: '95%' }}></div>
        <form style={root}>
          <h5 style={formHead}>Product detail</h5>
          <img src={this.state.prev} style={formPrev} alt="item preview" />
          <br />
          <input
            type="text"
            style={formInput}
            onChange={(e) => this.setState({ name: e.target.value })}
            value={this.state.name}
            placeholder="Name"
            name="product name"
          />
          <br />
          <input
            type="text"
            style={formInput}
            onChange={(e) => this.setState({ quantity: e.target.value })}
            value={this.state.quantity}
            placeholder="Quantity"
            name="product quantity"
          />

          <br />
          <input
            type="text"
            style={formInput}
            onChange={(e) => this.setState({ price: e.target.value })}
            value={this.state.price}
            placeholder="Price"
            name="product price"
          />
          <br />

          <input
            type="text"
            style={formInput}
            onChange={(e) => this.setState({ color: e.target.value })}
            value={this.state.color}
            placeholder="Color"
            name="product color"
          />
          <div style={formBtnContainer}>
            <button onClick={this.handleUpload} type="submit" style={formBtn}>
              Save
            </button>
            <button style={formBtn} onClick={this.handleClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
