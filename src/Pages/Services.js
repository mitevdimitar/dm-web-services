import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import ServiceCard from '../Components/ServiceCard';
import frontEnd from "../Assets/img/front-end.jpg";
import seo from "../Assets/img/seo.jpg";
import onlineCouching from "../Assets/img/online-couching.jpg";
import { SERVICES } from '../Utils/services';
import useIsInViewport from "use-is-in-viewport";
import ServiceInfo from '../Components/ServiceInfo';
import { isMobileDevice } from '../Utils/helpers';

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    //backgroundColor: "rgb(237, 237, 237)",
    padding: "10%"
  },
  cardsContainer: {
    minHeight: 300,
    "& :first-child": {
      marginBottom: isMobileDevice() ? 10 : 0
    }
  },
  cardContainer: {
    //backgroundColor: "#586062",
    color: "white",
    padding: "0 15px",
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
  slideLeft: {
    animation: "$slideInLeft 1.5s forwards",
    animationIterationCount: 1
  },
  "@keyframes slideInLeft": {
    "0%": {
      opacity: 0,
      transform: "translateX(200px)"
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
                <Grid container item xs={isMobileDevice() ? 12 : 4} className={`${classes.cardContainer} ${classes.slideRight}`} onClick={() => setInfo(SERVICES.FRONTEND)}>
                    <ServiceCard 
                      service="Front end development"
                      avatar={frontEnd}
                    />
                </Grid>
                {info && isMobileDevice() && (
                  <ServiceInfo selectedService={info} />
                )}
                <Grid container item xs={isMobileDevice() ? 12 : 4} className={classes.cardContainer} onClick={() => setInfo(SERVICES.SEO)}>
                    <ServiceCard 
                      service="Seo optimization" 
                      avatar={seo}
                    />
                </Grid>
                {info && isMobileDevice() && (
                  <ServiceInfo selectedService={info} />
                )}
                <Grid container item xs={isMobileDevice() ? 12 : 4} className={`${classes.cardContainer} ${classes.slideLeft}`} onClick={() => setInfo(SERVICES.LIVE_COACHING)}>
                    <ServiceCard 
                      service="Online coaching"
                      avatar={onlineCouching}
                    />
                </Grid>
                {info && isMobileDevice() && (
                  <ServiceInfo selectedService={info} />
                )}
              </Grid>
            ) /* : null */}
            {info && !isMobileDevice() && (
              <ServiceInfo selectedService={info} />
            )}
        </Grid>
    )
}

export default Services;