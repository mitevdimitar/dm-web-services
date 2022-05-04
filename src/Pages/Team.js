import Grid from '@mui/material/Grid';
import aboutUs from "../Assets/img/about-us.jpg";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
  infoBlock: {
    backgroundColor: "#BDBDBD",
    padding: "10%",
    color: "white"
  },
  imageBlock: {
    backgroundImage: `url(${aboutUs})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }
});


function Team() {
    const classes = useStyles();

    return (
        <Grid container id="services" className={classes.root}>
            <Grid container item xs={6} className={classes.infoBlock}>
              Team
            </Grid>
            <Grid container item xs={6} className={classes.imageBlock}>
            </Grid>
        </Grid>
    )
}

export default Team;