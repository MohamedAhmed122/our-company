import React from 'react'
import { Grid, Typography, Button, makeStyles, useTheme, useMediaQuery } from '@material-ui/core';
import CustomSoftwareIcon from '../../../assets/Custom Software Icon.svg'
import { Link } from 'react-router-dom';

const HomeCustom =()=>{
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    return(
        <Grid
        container
        direction="row"
        justify={matchesSM ? "center" : undefined}
        className={classes.serviceContainer}
      >
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : "5em",
            textAlign: matchesSM ? "center" : undefined
          }}
        >
          <Typography variant="h4">Custom Software Development</Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            Save Energy. Save Time. Save Money.
          </Typography>
          <Typography variant="subtitle1">
            Complete digital solutions, from investigation to{" "}
            <span className={classes.specialText}>celebration.</span>
          </Typography>
          <Button
            component={Link}
            to="/customsoftware"
            variant="outlined"
            className={classes.learnButton}
          >
            <span style={{ marginRight: 10 }}>Learn More</span>
            
          </Button>
        </Grid>
        <Grid item>
          <img
            className={classes.icon}
            alt="custom software icon"
            src={CustomSoftwareIcon}
          />
        </Grid>
      </Grid>
    
    )
}

export default HomeCustom;

const useStyles =makeStyles((theme)=>({
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