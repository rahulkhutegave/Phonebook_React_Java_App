import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Fab } from "@mui/material";
import classes from "./CreateDel.module.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const APIURL = "http://localhost:8080/delete-contacts";

function CreateDel(props) {
  const dispatch = useDispatch();

  const isUser = useSelector((state) => state.isUser);
  console.log(props.idArray.length);
  const ids = props.idArray;
  const onDeleteHandler = () => {
    axios.post(APIURL, ids).then(() => {
      alert("Contacts deleted!");
      props.isLoad();
    });
  };

  const addUserHandler = () => {
    isUser ? dispatch({ type: "ALL_USER" }) : dispatch({ type: "ADD_USER" });
  };

  return (
    <>
      <div className={classes.addUserStyle}>
        <Fab
          size="small"
          color="secondary"
          aria-label="delete"
          sx={{ marginRight: "5px" }}
          disabled={props.idArray.length === 0}
          onClick={onDeleteHandler}
        >
          <DeleteForeverIcon fontSize="small" />
        </Fab>

        <Fab
          color="primary"
          aria-label="add"
          size="small"
          onClick={addUserHandler}
        >
          <AddIcon fontSize="small" />
        </Fab>
      </div>
    </>
  );
}

export default CreateDel;
