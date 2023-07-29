import { useSelector } from "react-redux";
import AddContacts from "./AddContacts";
import Contacts from "./Contacts";
import classes from "./PhonebookPlate.module.css";
import TopBar from "./TopBar";
import React from "react";

function PhonebookPlate() {
  const isUser = useSelector((state) => state.isUser);

  return (
    <div className={classes.PhonebookPlate}>
      <TopBar />
      {isUser ? <AddContacts /> : <Contacts />}
    </div>
  );
}

export default PhonebookPlate;
