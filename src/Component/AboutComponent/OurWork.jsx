import React, { Fragment } from 'react'
import { Grid, Typography, Card, CardContent, makeStyles } from '@material-ui/core'
import covid19 from '../../assets/Covid19.png'
import school from '../../assets/school.png'
import third from '../../assets/third.png'

const OurWork =()=>{
    const classes = useStyles();
    const ourWorks =[{img:covid19,title:'heck the Latest news about Covid-19',built:'Built by React & Material-ui '},
                    {img:school,title: 'Find the best Teachers and Schools in Russia ', built: 'Built by Laravel & JavaScript'},
                    {img:third,title: 'Find the best University in France', built: 'Built by Laravel & JavaScript'}
                    ]
    return(
        <Fragment>
            <Grid container item style={{marginTop: '10rem'}} >
                <Typography variant='h2'>Latest Work</Typography>
            </Grid>
            <Grid container justify='space-between'>
                {
                    ourWorks.map((work,i) =>(
                <Grid item key={i}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Grid container direction='column'>
                                <Grid item>
                                    <img src={work.img} alt='covid19' className={classes.img}  />
                                </Grid>
                                <Grid item>
                                    <Typography variant='h6'>{work.title}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='subtitle1'>{work.built}</Typography>
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
export default OurWork;

const useStyles=makeStyles((theme)=>({
img:{
width: '25rem',
height: '15rem',
filter:' brightness(20%)',
'&:hover':{
    filter:' brightness(80%)',
}
},
card:{
    borderRadius: 15,
    marginBottom: '3rem',
    '&:hover':{
        boxShadow: theme.shadows[4],
        borderBottomStyle: 'solid',
        borderWidth: '5px',
        borderColor: '#64b5f6',
        
        [theme.breakpoints.down("sm")]: {
            marginBottom:'3rem',
        }
    },
},
workTitle:{
    marginLeft:'4rem',
    marginBottom:  '3rem'
}
}))