import React, { Fragment } from 'react';
import {Grid, Card, CardContent, Typography, Button, makeStyles } from '@material-ui/core';
import revolutionBackground from "../../../assets/repeatingBackground.svg"
import { Link } from 'react-router-dom';

const HomeRev =()=>{
    const classes = useStyles();

    return(
        <Fragment>
            <Grid
                container
                style={{ height: "60em", marginTop: "12em" }}
                alignItems="center"
                justify="center"
            >
                <Card className={classes.revolutionCard}>
                <CardContent>
                    <Grid
                    container
                    direction="column"
                    style={{ textAlign: "center" }}
                    >
                    <Grid item>
                        <Typography variant="h3" gutterBottom>
                        The Revolution
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1">
                        Visionary insights coupled with cutting-edge technology is a
                        recipe for revolution.
                        </Typography>
                        <Button
                        component={Link}
                        to="/revolution"
                        className={classes.learnButton}
                    
                        >
                        <span style={{ marginRight: 10 }}>Learn More</span>
                        </Button>
                    </Grid>
                    </Grid>
                </CardContent>
                </Card>
                <div className={classes.revolutionBackground} />
            </Grid>
        </Fragment>
    )
}
export default HomeRev

const useStyles=makeStyles((theme)=>({
    revolutionBackground: {
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    },
    revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    '&:hover':{
        boxShadow: theme.shadows[4],
    },
    [theme.breakpoints.down("sm")]: {
        paddingTop: "8em",
        paddingBottom: "8em",
        paddingLeft: 0,
        paddingRight: 0,
        borderRadius: 0,
        width: "100%"
    }
    },
    learnButton:{
        ...theme.typography.learnButton
    }
    
}))