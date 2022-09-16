import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import background from "../Assets/img/home.jpeg";
import mobileBackground from "../Assets/img/mobile-home.jpeg";
import { isMobileDevice } from '../Utils/helpers';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    backgroundImage: `url(${isMobileDevice() ? mobileBackground : background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: isMobileDevice() ? "contain" : "cover",
    backgroundPositionX: "right",
    position: "relative",
    height: isMobileDevice() ? "92vh" : "101vh"
    //if mobile, use backgroundPositionY: 20% either with Size cover or 100% (and extra space for the services)
  },
}));


function Home() {
    const classes = useStyles();

    return (
        <Grid id="home" className={`${classes.root} home-height`}>
        </Grid>
    )
}

export default Home;