import React, { useState } from "react";
import {
  DialogTitle,
  makeStyles,
  Grid,
  Dialog,
  TextField,
  Button,
  DialogContent,
} from "@material-ui/core";
import airplane from "../../assets/send.svg";

const SimpleDialog = ({ onClose, selectedValue, open }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const HandleChange = (event) => {
    let error;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        error = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        if (!error) {
          setEmailHelper("Invalid Email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        error = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/.test(
          event.target.value
        );
        if (!error) {
          setPhoneHelper("Invalid Phone number");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };
  return (
    <div style={{ zIndex: 1 }}>
      <Dialog style={{ zIndex: 6 }} open={open} onClose={handleClose}>
        <DialogTitle>Contact Us</DialogTitle>
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <TextField
                id="name"
                className={classes.text}
                l
                abel="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item>
              <TextField
                id="email"
                className={classes.text}
                error={emailHelper.length !== 0}
                label="email"
                value={email}
                helperText={emailHelper}
                onChange={(e) => HandleChange(e)}
              />
            </Grid>
            <Grid item>
              <TextField
                id="phone"
                className={classes.text}
                error={phoneHelper.length !== 0}
                label="phone"
                value={phone}
                helperText={phoneHelper}
                onChange={(e) => HandleChange(e)}
              />
            </Grid>
            <Grid item>
              <TextField
                InputProps={{ disableUnderline: true }}
                id="message"
                className={classes.msg}
                multiline
                rows={10}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>
            <Grid item>
              <Button
                disabled={
                  name.length === 0 ||
                  phone.length === 0 ||
                  message.length === 0 ||
                  email.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0
                }
                className={classes.send}
                variant="contained"
              >
                Send Message
                <img
                  style={{ marginLeft: "0.4rem" }}
                  src={airplane}
                  alt="airplane"
                />
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default SimpleDialog;

const useStyles = makeStyles((theme) => ({
  msg: {
    border: `2px solid #0b72B9`,
    marginTop: "5rem",
    borderRadius: 10,
    width: 500,

    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  text: {
    width: 500,
    marginTop: "1rem",
    marginLeft: "7rem",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "27em",
      marginLeft: "1rem",
    },
  },
  send: {
    ...theme.typography.estimate,
    backgroundColor: "#FFBA60",
    marginTop: "2rem",
    height: 45,
    width: 200,
    fontSize: " 1.3rem",
    borderRadius: 50,
    marginBottom: "4rem",
  },
}));
