import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    padding: "10%",
  },
});


function Contacts() {
    const classes = useStyles();

    return (
        <Grid container id="services" className={classes.root}>
            Contacts
        </Grid>
    )
}

export default Contacts;