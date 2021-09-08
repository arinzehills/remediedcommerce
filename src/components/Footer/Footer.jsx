import useStyles from "./styles";
import React from "react";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.red}>
      <p>&copy; Remedied Commerce 2021</p>
    </div>
  );
};

export default Footer;
