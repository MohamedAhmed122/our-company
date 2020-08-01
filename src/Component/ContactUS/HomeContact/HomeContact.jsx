import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Typography, Button, useTheme, useMediaQuery, makeStyles } from '@material-ui/core'
import infoBackground from '../../../assets/infoBackground.svg'



const HomeContact =()=>{
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    return(
        <Fragment>
            <Grid
            container
            style={{ height: "50em" }}
            alignItems="center"
            direction="row"
            className={classes.infoBackground}
            >
                <Grid
                    item
                    container
                    style={{
                    textAlign: matchesXS ? "center" : "inherit"
                    }}
                    direction={matchesXS ? "column" : "row"}
                >
                    <Grid
                    item
                    sm
                    style={{ marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em" }}
                    >
                    <Grid
                        container
                        style={{ marginBottom: matchesXS ? "10em" : 0 }}
                        direction="column"
                    >
                        <Typography variant="h2" style={{ color: "white" }}>
                        About Us
                        </Typography>
                        <Typography variant="subtitle2">Let's get personal.</Typography>
                        <Grid item>
                        <Button
                            component={Link}
                            to="/about"
                            variant="outlined"
                            style={{ color: "white", borderColor: "white" }}
                            className={classes.learnButton}
                        >
                            About Us
                        </Button>
                        </Grid>
                    </Grid>
                    </Grid>
                    <Grid item sm
                    style={{
                        marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                        textAlign: matchesXS ? "center" : "right"
                    }}
                    >
                    <Grid container direction="column">
                        <Typography variant="h2" style={{ color: "white" }}>
                        Contact Us
                        </Typography>
                        <Typography variant="subtitle2">
                        Say hello!{" "}
                        <span role="img" aria-label="waving hand">
                            👋🏻
                        </span>
                        </Typography>
                        <Grid item>
                            <Button
                                component={Link}
                                to="/contact"
                                variant="outlined"
                                style={{ color: "white", borderColor: "white" }}
                                className={classes.learnButton}
                            >
                            Contact Us
                        </Button>
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    )
}
export default HomeContact

const useStyles =makeStyles((theme)=>({
    learnButton:{
        ...theme.typography.learnButton
    },
    infoBackground: {
        backgroundImage: `url(${infoBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    }
}))