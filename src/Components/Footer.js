import { Button, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { makeStyles } from '@mui/styles';
import { isMobileDevice } from '../Utils/helpers';

const useStyles = makeStyles({
  root: {
    backgroundColor: "#586062 !important",
    color: "white",
    height: isMobileDevice() ? "auto" : 60,
    display: isMobileDevice() ? "block" : "flex"
  },
  whiteButton: {
    color: "white !important"
  }
});

function Footer() {
    const classes = useStyles();

    return (
        <Grid containter className={classes.root}>
            <Grid container alignItems="center" justifyContent={isMobileDevice() ? "space-around" : "center"} direction={isMobileDevice() ? "row" : "column"} item xs={isMobileDevice() ? 12 : 4}>
              <Typography>
                DM Web Service
              </Typography>
              <Typography style={{fontSize: "0.9rem"}}>
              © 2022 All rights reserved
              </Typography>
            </Grid>
            <Grid container item xs={isMobileDevice() ? 12 : 8}>
              <Grid container alignItems="center" justifyContent="center" item xs={6}>
                <Button className={classes.whiteButton}>
                  Privacy policy
                </Button>
              </Grid>
              <Grid container alignItems="center" justifyContent="center" item xs={6}>
                <IconButton className={classes.whiteButton}>
                  <LinkedInIcon />
                </IconButton>
                <IconButton className={classes.whiteButton}>
                  <FacebookIcon />
                </IconButton>
                <IconButton className={classes.whiteButton}>
                  <YouTubeIcon />
                </IconButton>
              </Grid>
            </Grid>
        </Grid>
    )
}

export default Footer;