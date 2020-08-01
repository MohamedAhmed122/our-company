import React, { Fragment } from 'react';
import { useMediaQuery, useTheme, makeStyles, Grid, Hidden, Typography, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import bulb from '../../assets/bulb.svg'
import cash from '../../assets/cash.svg';
import stopwatch from '../../assets/stopwatch.svg'
import backArrow from '../../assets/backArrow.svg'
import forwardArrow from '../../assets/forwardArrow.svg'



const MainCustom =()=>{
    const classes= useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    return(
        <Fragment>
            <Grid
            item
            container
            direction="row"
            justify={matchesMD ? "center" : undefined}
            className={classes.rowContainer}
            style={{ marginTop: matchesXS ? "1em" : "2em" }}
        >
            <Hidden mdDown>
                <Grid
                    item
                    className={classes.arrowContainer}
                    style={{ marginRight: "1em", marginLeft: "-3.5em" }}
                >
                    <IconButton
                    style={{ backgroundColor: "transparent" }}
                    component={Link}
                    to="/services"
                    >
                    <img src={backArrow} alt="Back to Services Page" />
                    </IconButton>
                </Grid>
            </Hidden>
            <Grid item container direction="column" className={classes.heading}>
            <Grid item>
                <Typography align={matchesMD ? "center" : undefined} variant="h2">
                Custom Software Development
                </Typography>
            </Grid>
            <Grid item>
                <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
                >
                Whether we’re replacing old software or inventing new solutions,
                Arc Development is here to help your business tackle technology.
                </Typography>
                <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
                >
                Using regular commercial software leaves you with a lot of stuff
                you don’t need, without some of the stuff you do need, and
                ultimately controls the way you work. Without using any software
                at all you risk falling behind competitors and missing out on huge
                savings from increased efficiency.
                </Typography>
                <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
                >
                Our custom solutions are designed from the ground up with your
                needs, wants, and goals at the core. This collaborative process
                produces finely tuned software that is much more effective at
                improving your workflow and reducing costs than generalized
                options.
                </Typography>
                <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
                >
                We create exactly what you what, exactly how you want it.
                </Typography>
            </Grid>
            </Grid>
            <Hidden mdDown>
            <Grid item className={classes.arrowContainer}>
                <IconButton
                style={{ backgroundColor: "transparent" }}
                component={Link}
                to="/mobileapps"
                >
                <img

                    src={forwardArrow}
                    alt="Forward to iOS/Android App Development Page"
                />
                </IconButton>
            </Grid>
            </Hidden>
        </Grid>
        <Grid
            item
            container
            direction="row"
            justify="center"
            style={{ marginTop: "15em", marginBottom: "20em" }}
            className={classes.rowContainer}
        >
            <Grid
            item
            container
            direction="column"
            md
            alignItems="center"
            style={{ maxWidth: "40em" }}
            >
            <Grid item>
                <Typography variant="h4">Save Energy</Typography>
            </Grid>
            <Grid item>
                <img src={bulb} alt="lightbulb" />
            </Grid>
            </Grid>
            <Grid
            item
            container
            direction="column"
            md
            alignItems="center"
            style={{
                maxWidth: "40em",
                marginTop: matchesSM ? "10em" : 0,
                marginBottom: matchesSM ? "10em" : 0
            }}
            >
            <Grid item>
                <Typography variant="h4">Save Time</Typography>
            </Grid>
            <Grid item>
                <img src={stopwatch} alt="stopwatch" />
            </Grid>
            </Grid>
            <Grid
            item
            container
            direction="column"
            md
            alignItems="center"
            style={{ maxWidth: "40em" }}
            >
            <Grid item>
                <Typography variant="h4">Save Money</Typography>
            </Grid>
            <Grid item>
                <img src={cash} alt="cash" />
            </Grid>
            </Grid>
            </Grid>
        </Fragment>
    )
}
const useStyles =makeStyles((theme)=>({
    heading: {
        maxWidth: "40em"
    },
    arrowContainer: {
        marginTop: "0.5em",
        marginLeft:'auto'
    },
    rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
        paddingLeft: "1.5em",
        paddingRight: "1.5em"
    }
    },
    itemContainer: {
    maxWidth: "40em"
    }
}))
export default MainCustom;