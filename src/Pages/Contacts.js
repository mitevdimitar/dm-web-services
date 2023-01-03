import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import ContactForm from '../Components/ContactForm/ContactForm';
import Typography from '@mui/material/Typography';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HomeIcon from '@mui/icons-material/Home';
import { isMobileDevice } from '../Utils/helpers';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    padding: "5%",
    background: "#a5a2a2",
    color: "white"
  },
  messageForm: {
    background: "white",
    borderRadius: 16,
    color: theme.palette.primary.main
  },
  contactHeader: {
    marginTop: isMobileDevice() ? "2em !important" : "7em !important",
    marginBottom: "3em"
  },
  contactsForm: {
    maxHeight: "50vh"
  },
  contactRow: {
    marginBottom: "1em !important"
  }
}));


function Contacts() {
    const classes = useStyles();

    return (
        <Grid container id="contacts" className={classes.root} justifyContent="space-around" /* alignItems="center" */>
            <Grid container item xs={isMobileDevice() ? 12 : 4} alignItems="center" justifyContent="center" className={classes.messageForm}>
              <ContactForm />
            </Grid>
            <Grid container item xs={isMobileDevice() ? 12 : 4} justifyContent="center" className={classes.contactsForm}>
              <Grid container justifyContent="center" className={classes.contactHeader}>
                <Typography component="h1" variant="h5">
                  Contact us
                </Typography>
              </Grid>
              <Grid /* container */ style={{width: "60%"}}>
                <Grid container item className={classes.contactRow}>
                  <Grid item xs={2}>
                    <PhoneIphoneIcon />
                  </Grid>
                  <Grid item xs={10}>
                    +359 888 656524
                  </Grid>
                </Grid>
                <Grid container item className={classes.contactRow}>
                  <Grid item xs={2}>
                    <MailOutlineIcon />
                  </Grid>
                  <Grid item xs={10}>
                    mitev.dimitar@gmail.com
                  </Grid>
                </Grid>
                <Grid container item className={classes.contactRow}>
                  <Grid item xs={2}>
                    <HomeIcon />
                  </Grid>
                  <Grid item xs={10}>
                    Varna, Bulgaria
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
        </Grid>
    )
}

export default Contacts;