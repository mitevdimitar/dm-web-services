import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    backgroundColor: "#586062",
    padding: "10%"
  },
  container: {
    backgroundColor: "white",
  }
});


function Services() {
    const classes = useStyles();

    return (
        <Grid container id="services" className={classes.root}>
            <Grid container item className={classes.container}>
                Services
            </Grid>
        </Grid>
    )
}

export default Services;