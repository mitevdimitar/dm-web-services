import { Button, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: "#586062 !important",
    color: "white",
    height: 60,
    display: "flex"
  },
  whiteButton: {
    color: "white !important"
  }
});

function Footer() {
    const classes = useStyles();

    return (
        <Grid containter className={classes.root}>
            <Grid container alignItems="center" justifyContent="center" direction="column" item xs={4}>
              <Typography>
                DM Web Service
              </Typography>
              <Typography style={{fontSize: "0.9rem"}}>
              © 2022 All rights reserved
              </Typography>
            </Grid>
            <Grid container alignItems="center" justifyContent="center" item xs={4}>
              <Button className={classes.whiteButton}>
                Privacy policy
              </Button>
            </Grid>
            <Grid container alignItems="center" justifyContent="center" item xs={4}>
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
    )
}

export default Footer;