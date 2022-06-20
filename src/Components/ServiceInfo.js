import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import frontEnd from "../Assets/img/front-end.jpg";

const useStyles = makeStyles({
    infoContainer: {
      height: "100%",
      margin: "30px !important",
    },
    header: {
      marginBottom: "20px !important"
    },
  });

function ServiceInfo({
    selectedService
}) {
    const classes = useStyles();
    console.log({selectedService})

    return (
        <Grid container item className={classes.infoContainer}>
            <Grid container item alignItems="center" className={classes.header}>
                <Avatar aria-label="front-end-service" alt="computer" src={frontEnd} sx={{ width: 25, height: 25, marginRight: 2 }}/>
                <Typography variant="h5">
                    Front-end services
                </Typography>
            </Grid>
            <Typography align="justify">
                <strong>ReactJS </strong>is renowned for its extensibility, adjustability and convenience. 
                Many of the developers acknowledge it one of the best JavaScript open source libraries. 
                It makes possible the creation of such complex software as web browser and mobile application 
                user interfaces that accommodate to the strictest standards.
            </Typography>
            <ul>
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
            </ul>
            <Grid container>
                <Button variant="contained" >
                    Find out more
                </Button>
            </Grid>
        </Grid>
    )
}

export default ServiceInfo;