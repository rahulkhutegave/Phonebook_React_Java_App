import ContactTemplate from "./ContactTemplate";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import classes from "./AddContacts.module.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const APIURL = "http://localhost:8080/add-contact";
const baseURL = "http://localhost:8080/contact/id";

function AddContacts() {
  const dispatch = useDispatch();
  const isUser = useSelector((state) => state.isUser);
  const contactid = useSelector((state) => state.id);
  const [isDisable, setIsDisable] = React.useState(true);
  const [msg, setMsg] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [contact, setContact] = React.useState({
    id: "",
    contactName: "",
    contactEmail: "",
    contactNumber: "",
  });

  React.useEffect(() => {
    if (contactid > 0) {
      axios
        .get(baseURL, {
          params: {
            id: contactid,
          },
        })
        .then((response) => {
          // setContact(response.data);
          setContact((prevState) => {
            return {
              ...prevState,
              id: response.data.id,
              contactName: response.data.name,
              contactEmail: response.data.email,
              contactNumber: response.data.phoneNumber,
            };
          });
        });
    }
  }, [contactid]);

  const nameChangeHandler = (event) => {
    setContact({
      ...contact,
      contactName: event.target.value,
    });
    // setContact((prevState) => {
    //   return { ...prevState, contactName: event.target.value };
    // });

    if (event.target.value.trim().length > 0 && contact.contactNumber > 0)
      setIsDisable(false);
    else setIsDisable(true);
  };

  const emailChangeHandler = (event) => {
    setContact((prevState) => {
      return { ...prevState, contactEmail: event.target.value };
    });
  };

  const numberChangeHandler = (event) => {
    setContact((prevState) => {
      return { ...prevState, contactNumber: event.target.value };
    });

    if (contact.contactName.trim().length > 0 && event.target.value > 0)
      setIsDisable(false);
    else setIsDisable(true);
  };

  const addUserHandler = () => {
    isUser ? dispatch({ type: "ALL_USER" }) : dispatch({ type: "ADD_USER" });
  };

  const submitHandler = (event) => {
    const CONTACT = {
      id: Number,
      name: contact.contactName,
      email: contact.contactEmail,
      mobNumber: contact.contactNumber,
    };
    if(contactid > 0)
      CONTACT.id = contactid

    console.log("contact>>", CONTACT);
    isUser ? dispatch({ type: "ALL_USER" }) : dispatch({ type: "ADD_USER" });
    event.preventDefault();
    axios
      .post(APIURL, CONTACT)
      .then((response) => {
        setMsg(response.data);
      })
      .catch((error) => {
        setError(error);
      });
    if (error) return `Error: ${error.message}`;
    console.log("Msg>>", msg);
  };
  return (
    <ContactTemplate>
      <form onSubmit={submitHandler} method="POST">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1.5, width: "90%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="name"
            label="Name"
            variant="standard"
            key={
              contact.contactName
                ? () => "_" + Math.random().toString(36).substr(2, 9)
                : () =>
                    contact.contactName +
                    Math.random().toString(36).substr(2, 9)
            }
            defaultValue={contact.contactName}
            onBlur={nameChangeHandler}
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            variant="standard"
            key={
              contact.contactEmail
                ? () => "_" + Math.random().toString(36).substr(2, 9)
                : () =>
                    contact.contactEmail +
                    Math.random().toString(36).substr(2, 9)
            }
            defaultValue={contact.contactEmail}
            onBlur={emailChangeHandler}
          />
          <TextField
            id="number"
            label="Number"
            type="number"
            required
            variant="standard"
            key={
              contact.contactNumber
                ? () => "_" + Math.random().toString(36).substr(2, 9)
                : () =>
                    contact.contactNumber +
                    Math.random().toString(36).substr(2, 9)
            }
            defaultValue={contact.contactNumber}
            onChange={numberChangeHandler}
          />
        </Box>
        <Stack spacing={2} direction="row" className={classes.buttonsPosition}>
          <Button variant="outlined" onClick={addUserHandler}>
            Cancel
          </Button>
          <Button variant="contained" type="submit" disabled={isDisable}>
            {" "}
            Save{" "}
          </Button>
        </Stack>
      </form>
    </ContactTemplate>
  );
}

export default AddContacts;
