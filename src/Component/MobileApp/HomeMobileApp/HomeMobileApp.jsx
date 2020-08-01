import React, { Fragment } from 'react'
import {Grid, Button, Typography, makeStyles, useTheme, useMediaQuery} from '@material-ui/core';
import { Link } from 'react-router-dom';
import mobileAppsIcon from '../../../assets/mobileIcon.svg'

const HomeMobileApp =()=>{
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    return(
        <Fragment>
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined
            }}
          >
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app
              {matchesSM ? null : <br />}with either mobile platform.
            </Typography>
            <Button
              component={Link}
              to="/mobileapps"
              variant="outlined"
              className={classes.learnButton}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              className={classes.icon}
              alt="mobile phone icon"
              src={mobileAppsIcon}
            />
          </Grid>
        </Grid>
    
        </Fragment>
    )
}
export default HomeMobileApp;

const useStyles= makeStyles((theme)=>({
    subtitle: {
        marginBottom: "1em"
      },
      icon: {
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]: {
          marginLeft: 0
        }
      },
      serviceContainer: {
        marginTop: "12em",
        [theme.breakpoints.down("sm")]: {
          padding: 25
        }
      },
      learnButton:{
          ...theme.typography.learnButton
      }
}))