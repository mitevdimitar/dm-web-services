import { Grid } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: "#586062 !important",
    color: "white",
    height: 60
  },
});

function Footer() {
    const classes = useStyles();

    return (
        <Grid containter className={classes.root}>
            Footer
        </Grid>
    )
}

export default Footer;