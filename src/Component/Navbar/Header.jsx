import React, { Fragment } from "react";
import { makeStyles, useTheme, useScrollTrigger } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import logo from "../..//assets/logo.svg";
import { AppBar, Toolbar } from "@material-ui/core";
import NavbarTabs from "./Tabs";
import Drawer from "./DrawerNavbar";

const Header = () => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();
  return (
    <Fragment>
      <ElevationScroll>
        <AppBar className={classes.appBar} color="primary">
          <Toolbar style={{ padding: "0" }}>
            <img className={classes.logo} src={logo} alt="Company logo" />
            {  match ?   <Drawer />: <NavbarTabs />}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.ToolbarMargin} />
    </Fragment>
  );
};

export default Header;


const useStyles = makeStyles((theme) => ({
  ToolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.3em",
    },
  },
  logo: {
    height: " 7em",
    [theme.breakpoints.down("md")]: {
      height: "6em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5em",
    },
  },
  appBar: {
    [theme.breakpoints.down("md")]: {
      zIndex: theme.zIndex.modal + 1,
    },

  },
}));
function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
