import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import ServiceCard from '../Components/ServiceCard';

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    //backgroundColor: "#586062",
    padding: "10%"
  },
  container: {
    //backgroundColor: "#586062",
    color: "white"
  }
});


function Services() {
    const classes = useStyles();

    return (
        <Grid container id="services" className={classes.root}>
            <Grid container item xs={4} className={classes.container}>
                <ServiceCard />
            </Grid>
            <Grid container item xs={4} className={classes.container}>
                <ServiceCard />
            </Grid>
            <Grid container item xs={4} className={classes.container}>
                <ServiceCard />
            </Grid>
        </Grid>
    )
}

export default Services;