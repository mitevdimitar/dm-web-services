import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    padding: "5%",
    background: "#a5a2a2",
    color: "white"
  },
  contactForm: {
    background: "white",
    borderRadius: 16,
    color: theme.palette.primary.main
  }
}));


function Contacts() {
    const classes = useStyles();

    return (
        <Grid container id="services" className={classes.root} justifyContent="space-around">
            <Grid container item xs={4} alignItems="center" justifyContent="center" className={classes.contactForm}>
              Contact form
            </Grid>
            <Grid container item xs={4} alignItems="center" justifyContent="center">
              Contacts
            </Grid>
        </Grid>
    )
}

export default Contacts;