import React from 'react' 
import { Grid, Typography, Button, makeStyles, useTheme, useMediaQuery } from '@material-ui/core';
import { Link } from 'react-router-dom';
import websitesIcon from '../../../assets/websiteIcon.svg'

const HomeWeb =()=>{
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
          <Typography variant="h4">Website Development</Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            Reach More. Discover More. Sell More.
          </Typography>
          <Typography variant="subtitle1">
            Optimized for Search Engines, built for speed.
          </Typography>
          <Button
            component={Link}
            to="/websites"
            variant="outlined"
            className={classes.learnButton}
          >
            <span style={{ marginRight: 10 }}>Learn More</span>
          </Button>
        </Grid>
        <Grid item>
          <img
            className={classes.icon}
            alt="website icon"
            src={websitesIcon}
          />
        </Grid>
      </Grid>
    )
}
export default HomeWeb;

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