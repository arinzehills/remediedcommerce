import React from "react";
import {
  div,
  Toolbar,
  IconButton,
  Menu,
  Typography,
  Badge,
  AppBar,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/remedied.png";
import useStyles from "./styles";
import { Link, useLocation } from "react-router-dom";
import HouseIcon from "@material-ui/icons/House";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div>
      <AppBar className={classes.appBar} color="inherit">
        <Toolbar>
          <img
            component={Link}
            to="/"
            src={logo}
            alt="commerce.js"
            height="105px"
            className={classes.image}
          />

          <div className={classes.grow} />
          <IconButton
            component={Link}
            className={classes.red}
            to="/"
            aria-label="Show cart items"
            color="primary"
          >
            <HouseIcon />
          </IconButton>
          {location.pathname === "/" && (
            <div className={classes.button}>
              {/* home button */}

              <IconButton
                component={Link}
                className={classes.blue}
                to="/cart"
                aria-label="Show cart items"
                color="primary"
              >
                <Badge badgeContent={totalItems} color="primary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
