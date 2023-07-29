import { List, ListItem, ListItemText } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import EditIcon from "@mui/icons-material/Edit";
import CreateDel from "./CreateDel";
import ContactTemplate from "./ContactTemplate";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const baseURL = "http://localhost:8080/contacts";
let idArray = [];
function Contacts(props) {
  const dispatch = useDispatch();
  const isUser = useSelector((state) => state.isUser);
  const [checked, setChecked] = React.useState([0]);
  const [isLoad, setIsLoad] = React.useState(false);
  const [contacts, setContacts] = React.useState([
    {
      id: 0,
      name: "No Contacts Added",
      email: "reply@email.com",
      phoneNumber: 1111,
    },
  ]);

  const onCheckedhandler = (event) => {
    const checkedId = event.target.id;
    if (idArray.includes(checkedId)) {
      idArray = idArray.filter((ids) => ids !== checkedId);
    } else {
      idArray.push(checkedId);
    }
    console.log(idArray);
  };

  const onEditHandler = (e, contact) => {
    console.log("inside on edit handler")
    dispatch({ type: "EDIT_USER", id: contact.id });
  };

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setContacts(response.data);
    });
  }, [isUser, isLoad]);

  if (!contacts) return "something went wrong";

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <>
      <ContactTemplate>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {contacts.map((cont) => {
            const labelId = `checkbox-list-label-${cont.id}`;

            return (
              <ListItem
                key={cont}
                secondaryAction={
                  <IconButton edge="end" aria-label="comments">
                    <EditIcon
                      key={cont.id}
                      value={cont}
                      onClick={(e) => onEditHandler(e, cont)}
                    />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton
                  role={undefined}
                  onClick={handleToggle(cont)}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      id={cont.id}
                      checked={checked.indexOf(cont) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                      onChange={onCheckedhandler}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={` ${cont.name}`} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </ContactTemplate>
      <CreateDel idArray={idArray} isLoad={() => setIsLoad(true)} />
    </>
  );
}

export default Contacts;
