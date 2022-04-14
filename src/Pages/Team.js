import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    backgroundColor: "#BDBDBD",
    padding: "10%",
    color: "white"
  },
});


function Team() {
    const classes = useStyles();

    return (
        <Grid container id="services" className={classes.root}>
            Team
        </Grid>
    )
}

export default Team;