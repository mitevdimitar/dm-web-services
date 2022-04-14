import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import ServiceCard from '../Components/ServiceCard';

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    //backgroundColor: "#586062",
    padding: "10%"
  },
  cardContainer: {
    //backgroundColor: "#586062",
    color: "white"
  }
});


function Services() {
    const [info, setInfo] = useState(null);
    const classes = useStyles();

    return (
        <Grid container id="services" className={classes.root}>
            <Grid container item>
              <Grid container item xs={4} className={classes.cardContainer} onClick={() => setInfo('front-end')}>
                  <ServiceCard />
              </Grid>
              <Grid container item xs={4} className={classes.cardContainer}>
                  <ServiceCard />
              </Grid>
              <Grid container item xs={4} className={classes.cardContainer}>
                  <ServiceCard />
              </Grid>
            </Grid>
            {info && (
              <Grid container item>
                Info container
              </Grid>
            )}
        </Grid>
    )
}

export default Services;