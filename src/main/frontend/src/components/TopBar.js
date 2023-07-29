import MenuIcon from "@mui/icons-material/Menu";
import classes from "./TopBar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { Fab } from "@mui/material";

export default function TopBar() {
  return (
    <div className={classes.topBar}>
      <MenuIcon fontSize="large" className={classes.preIcon} />
      <span className={classes.contactsText}>Contacts</span>
      <div className={classes.searchIcon}>
        <Fab color="primary" aria-label="add" size="small">
          <SearchIcon />
        </Fab>
      </div>
    </div>
  );
}
