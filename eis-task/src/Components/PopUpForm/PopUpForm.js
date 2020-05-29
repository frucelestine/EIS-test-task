import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import { storage } from "../../firebase";
import { Button } from "@material-ui/core";
import result from '../../result';


const useStyles = makeStyles((theme) => ({

    container:{
        right: '30px !important',
        left: 'unset !important',
        width: 250,
        border: "1px solid",
        textAlign: "center",
        borderRadius: 3,
    },
  paper: { 
    backgroundColor: theme.palette.background.paper,
    "& > *": {
      marginBottom: 15,
    },
  },

  formAction: {
    width: "80%",
    display: "flex",
    margin: '0 auto 15px',
    justifyContent: "space-between",
  },
  avatar: {
    height: 100,
    width: 100,
    marginTop: 20,
    borderRadius: 5,
    objectFit: "contain",
  },
  cardHead: {
    backgroundColor: "rgb(66, 66, 66)",
    margin: 0,
    color: "#fff",
    padding: 10,
  },
  uploadBtn:{
      textTransform: 'none',
      border: '1px solid black'
  },
  uploadSet:{
      textAlign: 'left',
      width: '85%',
      margin: '0 auto 30px'
  },
  divider:{
      height: 1,
      backgroundColor: 'black',
      width: '95%',
      margin: '0 auto 30px'
  }
}));

const PopUpForm = (props) => {
  const classes = useStyles();
  const [show, setShow] = useState(null);
  const [prev, setPrev] = useState(null);
  const [url, setUrl] = useState("");
  const [image, setImage] = useState(null);
  const [name, setName] = useState('Product XYZXXX');
  const [price, setPrice] = useState('1$');
  const [quantity, setQuantity] = useState('1');
  const [color, setColor] = useState('white');

  const handleChange = (e) => {
    setShow(show ? null : e.currentTarget);
    if (e.target.files[0]) {
      setPrev(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0]);
    }
  };

  const handleClose = (e)=>{
    setShow(show ? null : e.currentTarget);
  };

  const handleClick = (e) => {
    document.getElementById("hiddenFileInput").click();
  };

  const handleName = (e) =>{
      setName(e.target.value)
  };

  const handlePrice = (e) =>{
    setPrice(e.target.value)
};

const handleQuantity = (e) =>{
    setQuantity(e.target.value)
};

const handleColor = (e) =>{
    setColor(e.target.value)
};


  const handleUpload = (e) => {
      e.preventDefault();
      const data = {
          name: name,
          price: price,
          quantity:quantity,
          color:color
      }
      result.post('/product.json', data)
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
            handleClose();
        });
    }
    );
  };

  const open = Boolean(show);

  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <input
        id="hiddenFileInput"
        style={{ display: "none" }}
        type="file"
        onChange={handleChange}
      />
      <div className={classes.uploadSet}>
      <Button className={classes.uploadBtn} onClick={handleClick}>Add product</Button>
      </div>
      <div className={classes.divider}></div>
      <img src={url} style={{height: 300, width: 300}} />
      <Popper className={classes.container} id={id} open={open} show={show}> 
        <form className={classes.paper}>
          <h5 className={classes.cardHead}>Product description</h5>
          <img className={classes.avatar} src={prev} />
          <br />
          <input type="text" onChange={handleName} value={name} placeholder="Name" name="product name" />
          <br />
          <input type="text" onChange={handlePrice} value={price} placeholder="Price" name="product price" />
          <br />
          <input type="text" onChange={handleQuantity} value={quantity} placeholder="Quantity" name="product quantity" />
          <br />
          <input type="text" onChange={handleColor} value={color} placeholder="Color" name="product color" />
          <div className={classes.formAction}>
            <Button type='submit' className={classes.uploadBtn} onClick={handleUpload}>
              Save
            </Button>
            <Button className={classes.uploadBtn} onClick={handleClose} >Cancel</Button>
          </div>
        </form>
      </Popper>
    </div>
  );
};

export default PopUpForm;
