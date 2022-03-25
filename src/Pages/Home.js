import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'red'
  },
});


function Home() {
    const classes = useStyles();

    return (
        <Grid id="home" className={`${classes.root} full-height`}>
            Home
        </Grid>
    )
}

export default Home;