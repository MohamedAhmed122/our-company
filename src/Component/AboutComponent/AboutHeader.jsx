import React, { Fragment } from 'react'
import { Grid, Typography, Card, CardContent, makeStyles } from '@material-ui/core'
import ceo from '../../assets/ceo.png'
import Ceo from '../../assets/Ceo1.png'
import actor1 from '../../assets/actor1.png'
import actor2 from '../../assets/actor2.png'
import oda from '../../assets/oda.png'
import mohamed from '../../assets/mohamed.png'
import actor3 from '../../assets/actor3.png'
import actor4 from '../../assets/actor4.png'
import history from '../../assets/history.svg'


const Header =()=>{
    const classes = useStyles();
    const TeamMembers=[
    {name: 'Sarah Ahmed', job:'UI/UX designer', photo: actor1,
    text:'The continued development and maintenance of Material-UI is'},
    {name: 'Mahmoud Ahmed', job:'Back end developer', photo: oda,
    text:'The continued development and maintenance of Material-UI is'},
    {name: 'Tamem Ahmed', job:'Mobile Application developer', photo: actor2,
    text:'The continued development and maintenance of Material-UI is '}]
    const TeamMembers2=[
        {name: 'Sarah Ahmed', job:'UI/UX designer', photo: mohamed,
        text:'The continued development and maintenance of Material-UI is'},
        {name: 'Mahmoud Ahmed', job:'Back end developer', photo: actor3,
        text:'The continued development and maintenance of Material-UI is'},
        {name: 'Tamem Ahmed', job:'Mobile Application developer', photo: actor4,
        text:'The continued development and maintenance of Material-UI is '}]
    return(
        <Fragment>
            <Grid container direction='column' style={{marginTop: '8rem'}}>
                <Grid item> 
                    <Typography variant='h2' className={classes.aboutTitle}>About Us</Typography>
                </Grid>
                <Grid item>
                    <Typography variant='subtitle2' className={classes.aboutp}>Whether it be person to person, business to consumer, 
                    or an individual to their interests, technology is meant to bring us closer to what
                    we care about in the best way possible. Arc Development will use that principle to provide fast,
                    modern, inexpensive, and aesthetic software to the Midwest and beyond.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container item>
                <Typography variant='h2'className={classes.aboutTitle}>History</Typography>
            </Grid>
            <Grid container>
                <Grid item className={classes.historyGrid}>
                    <Typography variant='h5' style={{color:'#868686'}}>We’re the old father on the block.</Typography>
                    <Typography variant='subtitle1' paragraph>
                        Founded in 2019, we’re ready to get our hands on the world’s business problems
                    </Typography>
                    <Typography variant='subtitle1' paragraph>
                    It all started with one question: Why aren’t all businesses using available technology?
                    There are many different answers to that question: economic barriers, social barriers,
                    educational barriers, and sometimes institutional barriers.
                    </Typography>
                    <Typography variant='subtitle1'paragraph>
                    We aim to be a powerful force in overcoming these obstacles. Recent developments in software engineering 
                    and computing power, compounded by the proliferation of smart phones, has opened up infinite worlds 
                    of possibility. Things that have always been done by hand can now be done digitally and automatically, 
                    and completely new methods of interaction are created daily. Taking full advantage of these advancements 
                    is the name of the game.
                    </Typography>
                </Grid>
                <Grid item>
                    <img className={classes.historyImg} src={history} alt='history' />
                </Grid>
            </Grid>
            <Grid container item>
                <Typography variant='h2'className={classes.aboutTitle}>Team LeaderShip</Typography>
            </Grid>
            <Grid container justify='space-around' style={{marginTop: '4rem'}}>
                <Grid item  >
                    <Card className={classes.mainCard}>
                        <CardContent>
                            <Grid container direction='row'>
                                <Grid item>
                                    <img alt='ceo' src={Ceo}  className={classes.img} />
                                </Grid>
                                <Grid item>
                                    <Typography variant='h5'>Fall IBrahem</Typography>
                                    <Typography variant='h6'> CEO & Full Stack developer</Typography>
                                    <Typography variant='subtitle1' style={{textAlign: 'center', maxWidth: '20rem',}}>
                                        La région des Alpes est située à l’Est de la France. Les Alpes sont la chaîne de montagnes la plus haute d’Europe, 
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Card className={classes.mainCard}>
                        <CardContent>
                            <Grid container direction='row'>
                                <Grid item>
                                    <img alt='ceo' src={ceo}  className={classes.img} />
                                </Grid>
                                <Grid item>
                                    <Typography variant='h5'>Mohamed Youssef</Typography>
                                    <Typography variant='h6'> Co-founder & Front end developer</Typography>
                                    <Typography variant='subtitle1' style={{textAlign: 'center', maxWidth: '20rem'}}>
                                        La région des Alpes est située à l’Est de la France. Les Alpes sont la chaîne de montagnes la plus haute d’Europe,
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container item>
                <Typography variant='h2'style={{marginTop:'10rem',marginBottom: '5rem'}} className={classes.aboutTitle}> Our Great Team</Typography>
            </Grid>
            <Grid container justify='space-around' style={{marginBottom:'4rem'}}>
                {
                    TeamMembers.map((team,i)=>(
                        <Grid item key={i}>
                            <Card className={classes.subCard}>
                                <CardContent>
                                    <Grid container direction='column'>
                                        <Grid item>
                                            <img alt='ceo' src={team.photo}  className={classes.img} />
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='h5'>{team.name}</Typography>
                                            <Typography variant='h6'> {team.job}</Typography>
                                            <Typography variant='subtitle1' style={{textAlign: 'center', maxWidth: '19rem'}}>
                                                {team.text}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
            <Grid container justify='space-around' >
                {
                    TeamMembers2.map((team,i)=>(
                        <Grid item key={i}>
                            <Card className={classes.subCard}>
                                <CardContent>
                                    <Grid container direction='column'>
                                        <Grid item>
                                            <img alt='ceo' src={team.photo}  className={classes.img} />
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='h5'>{team.name}</Typography>
                                            <Typography variant='h6'> {team.job}</Typography>
                                            <Typography variant='subtitle1' style={{textAlign: 'center', maxWidth: '19rem'}}>
                                                {team.text}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Fragment>
    )
}
export default Header

const useStyles =makeStyles((theme)=>({
img:{
    height:'200px',
    width: '200px',
    borderRadius: '50%',
    margin:'2rem',
},
mainCard:{
boxShadow: theme.shadows[10],
borderRadius: 15,
borderRightStyle: 'solid',
borderWidth: '5px',
borderColor: '#64b5f6',
[theme.breakpoints.down("sm")]: {
    marginBottom:'3rem',
    width: '28rem'
},

'&:hover':{
    boxShadow: theme.shadows[4],
    borderWidth: '8px',


},
},
subCard:{
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    borderTopStyle: 'solid',
    borderBottomStyle: 'solid',
    borderWidth: '5px',
    borderColor: '#64b5f6',
    [theme.breakpoints.down("sm")]: {
        marginBottom:'3rem'
    },
    
    '&:hover':{
        boxShadow: theme.shadows[4],
        borderWidth: '8px',
        borderBottomStyle: 'solid',
    
    },
},
aboutTitle:{
    marginLeft:'4rem'
},
aboutp:{
    textAlign:'center',
    width: '80%',
    color: '#0b72B9',
    marginTop:'1rem',
    marginBottom:'12rem',
    marginLeft: '7rem'
},
historyGrid:{
    width:'50rem',
    marginLeft: '2rem'
},
historyImg:{
    [theme.breakpoints.down("sm")]: {
        width: '30rem',
        marginBottom: '10rem'
    }
}
}))