import React from 'react';
import {Typography, Grid, Button, makeStyles} from '@material-ui/core'
import Lottie from 'react-lottie'
import {Link } from 'react-router-dom'
import animationData from '../../animations/landinganimation/data';
const Hero =()=>{
    const classes= useStyles();
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return(
        <Grid container justify="flex-end" alignItems="center" direction="row">
        <Grid sm item className={classes.heroTextContainer}>
          <Typography variant="h2" align="center">
            Bringing West Coast Technology
            <br />
            to the Midwest
          </Typography>
          <Grid
            container
            justify="center"
            className={classes.buttonContainer}
          >
            <Grid item>
              <Button
                component={Link}
                to="/estimate"
                className={classes.estimateButton}
                variant="contained"
              >
                Free Estimate
              </Button>
            </Grid>
            <Grid item>
              <Button
                component={Link}
                to="/revolution"
                className={classes.learnButtonHero}
                variant="outlined"
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid sm item className={classes.animation}>
          <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
        </Grid>
      </Grid>
    
    
    )
}
export default Hero;

const useStyles=makeStyles((theme)=>({
    animation: {
        maxWidth: "50em",
        minWidth: "21em",
        marginTop: "2em",
        marginLeft: "10%",
        [theme.breakpoints.down("sm")]: {
          maxWidth: "30em"
        }
      },
      estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
          backgroundColor: theme.palette.secondary.light
        }
      },
      buttonContainer: {
        marginTop: "1em"
      },
      learnButtonHero: {
        ...theme.typography.learnButton,
        
      },
}))