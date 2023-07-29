import classes from "./BackgroundPh.module.css";
import PhonebookPlate from "./PhonebookPlate";

function BackgroundPh() {
  return (
    <div className={classes.backgroundCard}>
      <PhonebookPlate />
    </div>
  );
}

export default BackgroundPh;
