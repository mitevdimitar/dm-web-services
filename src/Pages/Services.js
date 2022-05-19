import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import ServiceCard from '../Components/ServiceCard';
import frontEnd from "../Assets/img/front-end.jpg";
import seo from "../Assets/img/seo.jpg";
import onlineCouching from "../Assets/img/online-couching.jpg";
import Button from '@mui/material/Button';
import { SERVICES } from '../Utils/constants';
import useIsInViewport from "use-is-in-viewport";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    //backgroundColor: "rgb(237, 237, 237)",
    padding: "10%"
  },
  cardsContainer: {
    height: 300
  },
  cardContainer: {
    //backgroundColor: "#586062",
    color: "white",
    padding: "0 15px"
  },
  infoContainer: {
    height: "100%",
    margin: "30px !important",
  },
  header: {
    marginBottom: "20px !important"
  },
  slideRight: {
    animation: "$slideInRight 1.5s forwards",
    animationIterationCount: 1
  },
  "@keyframes slideInRight": {
    "0%": {
      opacity: 0,
      transform: "translateX(-200px)"
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)"
    }
  },
});


function Services() {
    const [info, setInfo] = useState(null);
    const classes = useStyles();
    const [isInViewport, targetRef] = useIsInViewport();

    return (
        <Grid container id="services" className={classes.root} ref={targetRef}>
            {isInViewport && (
              <Grid container item className={classes.cardsContainer}>
                <Grid container item xs={4} className={`${classes.cardContainer} ${classes.slideRight}`} onClick={() => setInfo(SERVICES.FRONT_END)}>
                    <ServiceCard 
                      service="Front end development"
                      avatar={frontEnd}
                    />
                </Grid>
                <Grid container item xs={4} className={classes.cardContainer} onClick={() => setInfo(SERVICES.SEO)}>
                    <ServiceCard 
                      service="Seo optimization" 
                      avatar={seo}
                    />
                </Grid>
                <Grid container item xs={4} className={classes.cardContainer} onClick={() => setInfo(SERVICES.ONLINE_COACHING)}>
                    <ServiceCard 
                      service="Online coaching"
                      avatar={onlineCouching}
                    />
                </Grid>
              </Grid>
            ) /* : null */}
            {info && (
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
            )}
        </Grid>
    )
}

export default Services;