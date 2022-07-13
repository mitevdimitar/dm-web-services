import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import frontEnd from "../Assets/img/front-end.jpg";
import seo from "../Assets/img/seo.jpg";
import onlineCouching from "../Assets/img/online-couching.jpg";
import { SERVICES } from '../Utils/services';
import { isMobileDevice } from '../Utils/helpers';

const useStyles = makeStyles({
    infoContainer: {
      height: isMobileDevice() ? "auto" : "100%",
      margin: isMobileDevice() ? "50px 0 0 0 !important" : "30px !important",
    },
    header: {
      marginBottom: "20px !important"
    },
    list: {
      paddingLeft: 0,
      listStyle: "none"
    }
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
            <Grid container item alignItems="center" className={classes.header} justifyContent={isMobileDevice() ? "center" : selectedService.justify}>
                <Avatar aria-label="front-end-service" alt="computer" src={getAvatar()} sx={{ width: 25, height: 25, marginRight: 2 }}/>
                <Typography variant="h5">
                    {selectedService.title}
                </Typography>
            </Grid>
            <Typography align="justify">
                <strong>{selectedService.keyWord}</strong> {selectedService.description}
            </Typography>
            <Grid container justifyContent={isMobileDevice() ? "center" : selectedService.justify}>
                <ul className={classes.list}>
                    {selectedService.services.map((service, i) => {
                        return (
                            <li key={i}>{service}</li>
                        )
                    })}
                </ul>
            </Grid>
            <Grid container justifyContent={isMobileDevice() ? "center" : selectedService.justify}>
                <Button variant="contained" >
                    Find out more
                </Button>
            </Grid>
        </Grid>
    )
}

export default ServiceInfo;