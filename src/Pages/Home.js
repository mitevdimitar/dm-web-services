import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import background from "../Assets/img/home.jpeg";

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPositionX: "right",
    position: "relative"
    //if mobile, use backgroundPositionY: 20% either with Size cover or 100% (and extra space for the services)
  },
});


function Home() {
    const classes = useStyles();

    return (
        <Grid id="home" className={`${classes.root} full-height`}>
        </Grid>
    )
}

export default Home;