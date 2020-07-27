import React, { Fragment, useState } from "react";
import { Tabs, Tab, makeStyles, Button } from "@material-ui/core";
import MenuDropdown from "./MenuDropdown";

const NavbarTabs = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen]= useState(false);

  return (
    <Fragment>
      <Tabs className={classes.tabs}>
        <Tab className={classes.tab} label="Home" />
        <Tab
          className={classes.tab}
          aria-owns={anchorEl ? "simple-menu" : null}
          aria-haspopup={anchorEl ? "true" : null}
          label="Services"
          onMouseOver={(e)=>{
              setOpen(true); 
              setAnchorEl(e.currentTarget)
          }}
      
        />
        <Tab className={classes.tab} label="The Revolution" />
        <Tab className={classes.tab} label="About Us" />
        <Tab className={classes.tab} label="Contact Us" />
      </Tabs>
      <Button variant="contained" color="secondary" className={classes.button}>
        Free Estimate
      </Button>
      <MenuDropdown open={open} anchorEl={anchorEl} setAnchorEl={setAnchorEl} setOpen={setOpen} />
    </Fragment>
  );
};
const useStyles = makeStyles((theme) => ({
  tabs: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    fontWeight: 600,
    marginLeft: "20px",
    minWidth: 10,
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "400px",
    marginLeft: "30px",
    marginRight: "40px",
  },
}));
export default NavbarTabs;
