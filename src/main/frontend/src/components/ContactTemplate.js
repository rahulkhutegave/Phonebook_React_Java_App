import classes from "./ContactTemplate.module.css";

const ContactTemplate = (props) => {
  return <div className={classes.contactsBox}>{props.children}</div>;
};

export default ContactTemplate;
