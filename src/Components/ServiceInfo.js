import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import frontEnd from "../Assets/img/front-end.jpg";
import seo from "../Assets/img/seo.jpg";
import onlineCouching from "../Assets/img/online-couching.jpg";
import { SERVICES } from '../Utils/services';

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

    const getAvatar = () => {
        if (selectedService === SERVICES.FRONTEND) {
            return frontEnd;
        } else if (selectedService === SERVICES.SEO) {
            return seo;
        }
        return onlineCouching;
    }

    return (
        <Grid container item className={classes.infoContainer}>
            <Grid container item alignItems="center" className={classes.header}>
                <Avatar aria-label="front-end-service" alt="computer" src={getAvatar()} sx={{ width: 25, height: 25, marginRight: 2 }}/>
                <Typography variant="h5">
                    {selectedService.title}
                </Typography>
            </Grid>
            <Typography align="justify">
                <strong>{selectedService.keyWord}</strong> {selectedService.description}
            </Typography>
            <ul>
                {selectedService.services.map((service, i) => {
                    return (
                        <li>{service}</li>
                    )
                })}
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